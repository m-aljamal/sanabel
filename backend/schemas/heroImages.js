import { BsImages as icon } from "react-icons/bs";

export default {
  name: "home_page_hero",
  title: "Home page hero",
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
    // {
    //   name: "name",
    //   type: "langTitle",
    //   title: "عنوان الصورة",
    // },
    // {
    //   name: "body",
    //   type: "langTitle",
    //   title: "النص على الصورة",
    // },
  ],
};
