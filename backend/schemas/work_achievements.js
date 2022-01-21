import { GrWorkshop as icon } from "react-icons/gr";

export default {
  name: "work_achievements",
  title: "work achievements",
  type: "document",
  icon,
  fields: [
    {
      name: "achievements",
      type: "langTitle",
      title: "المستفيدين",
    },

    {
      name: "image",
      type: "image",
      title: "صورة",
      options: {
        hotspot: true,
      },
      validation: (Role) => Role.required().error("iamge is required"),
    },

    {
      name: "number",
      type: "number",
      title: "achievement count",
      description: "add work achievement number ",
      validation: (Role) => Role.required().error("number is required"),
    },
  ],
};
