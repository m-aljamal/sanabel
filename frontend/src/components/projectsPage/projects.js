import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import SearchProjects from "./SerchProjects";
import Img from "gatsby-image";
import { useLang } from "../../context/lang-context";

import { text } from "../../data/text";
import AppTitle from "../AppTitle";
const Project = ({
  project: { description, paid, target, projectTitle, project_image },
}) => {
  const [lang] = useLang();
  const numberFormat = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    })
      .format(number)
      .replace(/\D00$/, "");
  };
  const remain = target - paid;
  return (
    <div className=" shadow-lg rounded-md">
      <div className="image">
        <Img
          fluid={project_image.asset.fluid}
          className="w-full rounded-t-md"
        />
      </div>
      <div className="p-3">
        <h3 className="text-AppGreen text-xl font-semibold">
          {projectTitle[lang]}
        </h3>
        <p className="py-4 text-lg ">{description[lang]}</p>
        <span
          className={`progressHolder ${target === paid ? "done" : undefined} `}
        >
          <span className=" flex justify-between">
            <span>
              <span className="text-AppGreen font-bold">
                {text[lang].project.target}
              </span>
              {numberFormat(target)}
            </span>
            <span>
              {remain !== 0 && (
                <>
                  <span className="text-AppGreen font-bold">
                    {text[lang].project.remains}
                  </span>
                  {numberFormat(remain)}
                </>
              )}
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

const Projects = () => {
  const { projects } = useStaticQuery(graphql`
    {
      projects: allSanityProjects {
        nodes {
          description {
            ar
            en
          }
          id
          paid
          projectType
          target
          projectTitle {
            ar
            en
          }
          project_image {
            asset {
              fluid(maxWidth: 4000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);

  const [projState, setProjects] = useState(projects.nodes);
  const [projectPerPage, setProjectPerPage] = useState(3);

  const setToAll = () => {
    setProjects(projects.nodes);
  };
  const loadModeProjects = () => {
    setProjectPerPage(projectPerPage + 3);
  };
  const [lang] = useLang();
  return (
    <div className="container py-10">
      <div className="flex justify-center">
        <AppTitle>
          <h2>{text[lang].project.title}</h2>
        </AppTitle>
      </div>
      <SearchProjects
        setProjects={setProjects}
        setToAll={setToAll}
        allProjects={projects.nodes}
      />
      <div className="grid lg:grid-cols-2   xl:grid-cols-3  gap-5 mt-8  ">
        {projState.slice(0, projectPerPage).map((project, i) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
      {projState.length > projectPerPage && (
        <p className="seeMore" onClick={loadModeProjects}>
          مشاهدة المزيد
        </p>
      )}
    </div>
  );
};

export default Projects;
