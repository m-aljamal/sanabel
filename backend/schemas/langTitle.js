export default {
  name: "langTitle",
  type: "object",
  title: "Language title",
  fields: [
    {
      name: "ar",
      type: "string",
      title: "العنوان بالعربية",
      validation: (Role) => Role.required().error("النص مطلوب"),
    },
    {
      name: "en",
      type: "string",
      title: "العنوان بالانجليزية",
      validation: (Role) => Role.required().error("النص مطلوب"),
    },
  ],
};
