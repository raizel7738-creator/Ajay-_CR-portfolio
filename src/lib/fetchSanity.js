import { client } from "./sanityClient"

export async function fetchSanityQuery(query) {
  if (import.meta.env.PROD) {
    const response = await fetch("/api/sanity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })

    const payload = await response.json().catch(() => null)

    if (!response.ok) {
      throw new Error(payload?.error || `Sanity request failed (${response.status})`)
    }

    return payload
  }

  return client.fetch(query)
}
