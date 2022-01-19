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
      name: "number",
      type: "number",
      title: "achievement count",
      description: "add work achievement number ",
      validation: (Role) => Role.required().error("number is required"),
    },
  ],
};
