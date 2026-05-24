export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Skill Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Frontend",  value: "Frontend"  },
          { title: "Backend",   value: "Backend"   },
          { title: "Database",  value: "Database"  },
          { title: "Language",  value: "Language"  },
          { title: "Tools",     value: "Tools"     },
        ],
        layout: "radio",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "level",
      title: "Proficiency Level (0–100)",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0).max(100),
      description: "e.g. 85 = 85% skill bar",
    },
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
}
