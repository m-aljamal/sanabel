import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import projectsName from "../../assets/icons/projects/sections.svg"
import styled from "styled-components"
import SearchProjects from "./SerchProjects"
import Img from "gatsby-image"

import donate from "../../assets/icons/projects/donate.svg"
import { Link } from "gatsby"
const Project = ({
  project: { description, paid, target, title, project_image },
}) => {
  const numberFormat = number => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    })
      .format(number)
      .replace(/\D00$/, "")
  }
  const remain = target - paid
  return (
    <ProjectStyle>
      <div className="image">
        <Img fluid={project_image.asset.fluid} className="img" />
        {/* <div className="info">
          <Link to="/donate">
            <img src={donate} alt="donate" />
            <p>تبرع الان</p>
          </Link>
        </div> */}
      </div>
      <h3>{title}</h3>
      <p className="textFit mb-5 desc">{description}</p>
      <span
        className={`progressHolder ${target === paid ? "done" : undefined} `}
      >
        {/* <Progress
          type="circle"
          width="90px"
          strokeColor={{
            "0%": "var(--dark)",
            "100%": "var(--green)",
          }}
          percent={Math.round((paid * 100) / target)}
        /> */}
        <span className="textHolder textFit">
          <span>
            <span className="span"> الهدف: </span>
            {numberFormat(target)}
          </span>
          <span>
            {remain !== 0 && (
              <>
                <span className="span">المتبقي: </span>
                {numberFormat(remain)}
              </>
            )}
          </span>
        </span>
      </span>
    </ProjectStyle>
  )
}

const Projects = () => {
  const { projects } = useStaticQuery(graphql`
    {
      projects: allSanityProjects {
        nodes {
          description
          id
          paid
          projectType
          target
          # title
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
  `)

  const [projState, setProjects] = useState(projects.nodes)
  const [projectPerPage, setProjectPerPage] = useState(3)

  const setToAll = () => {
    setProjects(projects.nodes)
  }
  const loadModeProjects = () => {
    setProjectPerPage(projectPerPage + 3)
  }
  return (
    <ProStyle className="pagePadding">
      <div className="name">
        <img src={projectsName} alt="out work" />
      </div>
      <SearchProjects
        setProjects={setProjects}
        setToAll={setToAll}
        allProjects={projects.nodes}
      />
      <div className="projects container ">
        {projState.slice(0, projectPerPage).map((project, i) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
      {projState.length > projectPerPage && (
        <p className="seeMore" onClick={loadModeProjects}>
          مشاهدة المزيد
        </p>
      )}
    </ProStyle>
  )
}

export default Projects

const ProStyle = styled.section`
  .name {
    width: 30rem;
    margin: 0 auto 4rem auto;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
  }
  .seeMore {
    background: var(--gradiant);
    padding: 1rem;
    border-radius: 10px;
    color: white;
    width: 16rem;
    margin: 0 auto;
    cursor: pointer;
    margin-top: 2rem;
  }
  @media (max-width: 768px) {
    .name {
      width: 25rem;
    }
  }
  @media (max-width: 345px) {
    .projects {
      grid-template-columns: 1fr;
    }
    .progressHolder {
      flex-direction: column;
    }
  }
`

const ProjectStyle = styled.div`
  box-shadow: var(--shadow);
  padding: 2rem;
  h3 {
    text-align: end;
    color: var(--green);
    font-size: 2.3rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  p {
    font-size: 1.8rem;
  }
  .progressHolder {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .textHolder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .span {
    color: var(--green);
  }
  .image {
    position: relative;
    overflow: hidden;
    &:hover .img {
      transition: all 0.3s linear;
      opacity: 0.3;
    }
    background: var(--dark);

    .info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      opacity: 0;
      transition: all 0.3s linear;
      text-align: center;
      img {
        width: 50px;
      }
      p {
        color: var(--green);
      }
    }
    &:hover .info {
      opacity: 1;
    }
  }
  /* @media(max-width:400px){
    
  } */
`
