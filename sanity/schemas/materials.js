export default {
  name: "materials",
  title: "Materials",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "file",
      title: "File",
      type: "file",
    },
    {
      name: "public",
      title: "Public",
      type: "boolean",
      description: "Show this file on the /materials page",
    },
  ],
};
