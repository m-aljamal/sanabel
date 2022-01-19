import { IoIosImages as icon } from "react-icons/io";

export default {
  name: "pages_hero",
  title: "Pages hero images",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "image name",
      validation: (Rule) =>
        Rule.required().error("A title of min. 10 characters is required"),
    },
    {
      name: "image",
      type: "image",
      title: "hero image",
      options: {
        hotspot: true,
      },
      validation: (Role) => Role.required().error("iamge is required"),
    },
    {
      name: "imageTitle",
      type: "langTitle",
      title: "العنوان على الصورة",
      validation: (Role) => Role.required().error("title is required"),
    },
    {
      name: "ImageBody",
      type: "langTitle",
      title: "نص الصورة",
      validation: (Role) => Role.required().error("text body is required"),
    },
  ],
};
