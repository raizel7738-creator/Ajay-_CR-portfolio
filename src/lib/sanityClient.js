import { createClient } from "@sanity/client"
import { createImageUrlBuilder } from "@sanity/image-url"

const DEFAULT_PROJECT_ID = "1tmex7u3"
const DEFAULT_DATASET = "production"

function readEnv(value, fallback) {
  if (!value || typeof value !== "string") return fallback
  const trimmed = value.trim()
  if (!trimmed || trimmed.includes("your_")) return fallback
  return trimmed
}

export const projectId = readEnv(import.meta.env.VITE_SANITY_PROJECT_ID, DEFAULT_PROJECT_ID)
export const dataset = readEnv(import.meta.env.VITE_SANITY_DATASET, DEFAULT_DATASET)

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  // API (not CDN) returns fresh CMS updates immediately
  useCdn: import.meta.env.VITE_SANITY_USE_CDN === "true",
})

const builder = createImageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
