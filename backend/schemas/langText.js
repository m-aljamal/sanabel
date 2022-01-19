export default {
  name: "langText",
  type: "object",
  title: "Langyage description",
  fields: [
    {
      name: "ar",
      type: "text",
      title: "النص بالعربية",
      validation: (Role) => Role.required().error("النص مطلوب"),
    },
    {
      name: "en",
      type: "text",
      title: "النص بالانجليزية",
      validation: (Role) => Role.required().error("النص مطلوب"),
    },
  ],
};
