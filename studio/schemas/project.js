export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "points",
      title: "Key Points (Bullet Points)",
      type: "array",
      of: [{ type: "string" }],
      description: "These show as bullet points on the project card",
    },
    {
      name: "tech",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. React.js, Node.js, MongoDB",
    },
    {
      name: "github",
      title: "GitHub URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "live",
      title: "Live Demo URL (optional)",
      type: "url",
    },
    {
      name: "image",
      title: "Project Screenshot (optional)",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "featured",
      title: "Show on Portfolio",
      type: "boolean",
      initialValue: true,
      description: "Toggle off to hide this project",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "1 = shown first, 2 = second, etc.",
      initialValue: 1,
    },
  ],
  preview: {
    select: { title: "title", subtitle: "description", media: "image" },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
}
