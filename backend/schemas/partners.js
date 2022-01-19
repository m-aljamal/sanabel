import { IoIosPeople as icon } from "react-icons/io";

export default {
  name: "partners",
  title: "Partners",
  type: "document",
  icon,
  fields: [
    {
      name: "logo",
      type: "array",
      of: [{ type: "image" }],
      title: "partners logo",
      description: "add partners logo ",
      validation: (Rule) => Rule.required().error("logo is required"),
    },
  ],
};
