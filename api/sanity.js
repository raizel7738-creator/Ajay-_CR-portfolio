const DEFAULT_PROJECT_ID = "1tmex7u3"
const DEFAULT_DATASET = "production"
const API_VERSION = "2024-01-01"

function readEnv(value, fallback) {
  if (!value || typeof value !== "string") return fallback
  const trimmed = value.trim()
  if (!trimmed || trimmed.includes("your_")) return fallback
  return trimmed
}

function getSanityConfig() {
  const projectId = readEnv(
    process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID,
    DEFAULT_PROJECT_ID
  )
  const dataset = readEnv(
    process.env.VITE_SANITY_DATASET || process.env.SANITY_DATASET,
    DEFAULT_DATASET
  )

  return { projectId, dataset }
}

export default async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "POST") {
    res.setHeader("Allow", "GET, POST")
    return res.status(405).json({ error: "Method not allowed" })
  }

  const query =
    req.method === "POST"
      ? typeof req.body === "string"
        ? JSON.parse(req.body).query
        : req.body?.query
      : req.query?.query

  if (!query || typeof query !== "string") {
    return res.status(400).json({ error: "Missing GROQ query" })
  }

  const { projectId, dataset } = getSanityConfig()
  const url = new URL(
    `https://${projectId}.api.sanity.io/v${API_VERSION}/data/query/${dataset}`
  )
  url.searchParams.set("query", query)

  try {
    const sanityResponse = await fetch(url.toString(), {
      headers: { Accept: "application/json" },
    })

    const payload = await sanityResponse.json()

    if (!sanityResponse.ok) {
      return res.status(sanityResponse.status).json({
        error: payload?.error?.description || "Sanity query failed",
      })
    }

    return res.status(200).json(payload.result)
  } catch (error) {
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Sanity proxy failed",
    })
  }
}
