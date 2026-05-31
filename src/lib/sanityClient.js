import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "1tmex7u3"
const dataset = import.meta.env.VITE_SANITY_DATASET || "production"

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
