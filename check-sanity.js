// Check Sanity experience data
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "1tmex7u3",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const experienceQuery = `
  *[_type == "experience"] | order(order asc) {
    _id,
    role,
    company,
    duration,
    points,
    type,
    order
  }
`;

console.log("🔍 Fetching experience from Sanity...\n");

client
  .fetch(experienceQuery)
  .then((experiences) => {
    console.log(`✅ Found ${experiences.length} experience entries:\n`);
    experiences.forEach((exp, index) => {
      console.log(`${index + 1}. ${exp.role} at ${exp.company}`);
      console.log(`   Type: ${exp.type}`);
      console.log(`   Order: ${exp.order}`);
      console.log(`   Duration: ${exp.duration}`);
      console.log(`   Points: ${exp.points?.length || 0} items`);
      console.log("");
    });
    
    if (experiences.length === 0) {
      console.log("\n⚠️  No experience entries found in Sanity!");
    }
  })
  .catch((error) => {
    console.error("❌ Error fetching experience:", error.message);
  });
