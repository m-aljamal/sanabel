import { GiNewspaper as icon } from "react-icons/gi";

export default {
  name: "news",
  title: "News",
  type: "document",
  icon,
  fields: [
    {
      name: "newsTitle",
      type: "langTitle",
      title: "عنوان الخبر",
      description: "add news name ",
      validation: (Rule) => Rule.required().error("title is required"),
    },
    {
      name: "description",
      type: "langText",
      title: "نص الخبر",
      description: "add news description ",

      validation: (Role) => Role.required().error("description is required"),
    },
    {
      name: "date",
      type: "date",
      title: "News date",
      description: "add the date of news ",
      validation: (Role) => Role.required().error("date is required"),
    },
    {
      name: "news_image",
      type: "image",
      title: "news image",
      description: "add news image",
      options: {
        hotspot: true,
      },
      validation: (Role) => Role.required().error("image is required"),
    },
  ],
};
