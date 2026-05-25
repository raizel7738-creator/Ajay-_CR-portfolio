// Check Sanity data
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "1tmex7u3",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, // Using CDN like production
});

const projectsQuery = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    description,
    points,
    tech,
    github,
    live,
    image,
    featured,
    order
  }
`;

console.log("🔍 Fetching projects from Sanity (with CDN)...\n");

client
  .fetch(projectsQuery)
  .then((projects) => {
    console.log(`✅ Found ${projects.length} projects:\n`);
    projects.forEach((project, index) => {
      console.log(`${index + 1}. ${project.title} (Order: ${project.order})`);
    });
    
    if (projects.length === 0) {
      console.log("\n⚠️  No projects found in Sanity!");
      console.log("You need to add projects in Sanity Studio.");
    }
  })
  .catch((error) => {
    console.error("❌ Error fetching projects:", error.message);
  });
