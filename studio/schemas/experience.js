export default {
  name: "experience",
  title: "Experience / Education",
  type: "document",
  fields: [
    {
      name: "role",
      title: "Role / Degree",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "company",
      title: "Company / Institution",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
      description: "e.g. May 2025 – September 2025",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "points",
      title: "Key Points",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Work Experience", value: "work" },
          { title: "Education",       value: "education" },
        ],
        layout: "radio",
      },
      initialValue: "work",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    },
  ],
  preview: {
    select: { title: "role", subtitle: "company" },
  },
}
