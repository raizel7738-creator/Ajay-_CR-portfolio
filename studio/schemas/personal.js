export default {
  name: "personal",
  title: "Personal Info",
  type: "document",
  fields: [
    { name: "name",      title: "Full Name",       type: "string" },
    { name: "title",     title: "Job Title",        type: "string" },
    { name: "tagline",   title: "Tagline",          type: "string" },
    { name: "bio",       title: "Bio Paragraph",    type: "text", rows: 5 },
    { name: "email",     title: "Email",            type: "string" },
    { name: "phone",     title: "Phone",            type: "string" },
    { name: "github",    title: "GitHub URL",       type: "url" },
    { name: "linkedin",  title: "LinkedIn URL",     type: "url" },
    { name: "location",  title: "Location",         type: "string" },
    {
      name: "available",
      title: "Available for Work",
      type: "boolean",
      initialValue: true,
      description: "Shows green 'Available' badge on Hero section",
    },
  ],
}
