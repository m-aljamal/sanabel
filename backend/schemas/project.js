import { MdWork as icon } from "react-icons/md";

export default {
  name: "projects",
  title: "Projects",
  type: "document",
  icon,
  fields: [
    {
      name: "projectTitle",
      type: "langTitle",
      title: "عنوان المشروع",
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
      name: "projectType",
      title: "Project type",
      type: "string",
      description: "choose project type",
      options: {
        list: [
          { title: "Relief project", value: "relief" },
          { title: "Eduaction project", value: "education" },
          { title: "Medical projects", value: "medical" },
          { title: "Service projects", value: "service" },
        ],
        layout: "radio",
      },
      validation: (Role) => Role.required().error("project type is required"),
    },
    {
      name: "target",
      type: "number",
      title: "project target",
      description: "Add project target",
      validation: (Role) => Role.required().error("target is required"),
    },
    {
      name: "paid",
      type: "number",
      title: "project total paid",
      description: "Add project total money paid",
      validation: (Role) => Role.required().error("paid is required"),
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
