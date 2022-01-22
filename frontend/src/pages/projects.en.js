import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectsPage from "../components/projectsPage";
const Projects = ({ location }) => (
  <Layout location={location}>
    <SEO title="Projects" />
    <ProjectsPage />
  </Layout>
);

export default Projects;
