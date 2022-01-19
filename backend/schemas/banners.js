import { RiImageAddFill as icon } from "react-icons/ri";

export default {
  name: "banners",
  title: "Banners",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Image title",
      description: "Add news name ",
      validation: (Rule) => Rule.required().error("title is required"),
    },
    {
      name: "image",
      type: "image",
      title: "banner image",
      description: "add banner image",
      options: {
        hotspot: true,
      },
      validation: (Role) => Role.required().error("image is required"),
    },
  ],
};
