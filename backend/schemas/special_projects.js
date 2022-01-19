import { AiFillStar as icon } from "react-icons/ai";

export default {
  name: "special_projects",
  title: "Special Projects",
  type: "document",
  icon,
  fields: [
    {
      name: "projectTitle",
      type: "langTitle",
      title: "اسم المشروع",
      description: "add project name ",
      validation: (Rule) => Rule.required().error("title is required"),
    },
    {
      name: "description",
      type: "langText",
      title: "شرح عن المشروع",
      description: "add project description ",

      validation: (Role) => Role.required().error("description is required"),
    },
    {
      name: "beneficiaries",
      type: "langTitle",
      title: "المستفيدين",
      description: "عدد المسفيدين: 750 طفلة وطفل",
      validation: (Role) => Role.required().error("beneficiaries is required"),
    },
    {
      name: "location",
      type: "langTitle",
      title: "موقع المشروع",
      description: "الموقع سوريا -حلب",
      validation: (Role) => Role.required().error("location is required"),
    },
    {
      name: "project_image",
      type: "image",
      title: "Project image",
      description: "add project image",
      options: {
        hotspot: true,
      },
      validation: (Role) => Role.required().error("image is required"),
    },
  ],
};
