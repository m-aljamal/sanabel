import React from "react";
import styled from "styled-components";
import specialProjects from "../../assets/icons/specialProjects/specialProjects.svg";
import { useStaticQuery, graphql } from "gatsby";
import ImgWithBorder from "../ImgWithBorder";
import Slider from "react-slick";
import { useLang } from "../../context/lang-context";
const SpecialProjects = () => {
  const { special } = useStaticQuery(graphql`
    {
      special: allSanitySpecialProjects {
        nodes {
          id
          location {
            ar
            en
          }
          projectTitle {
            ar
            en
          }
          description {
            ar
            en
          }
          beneficiaries {
            ar
            en
          }
          project_image {
            asset {
              fluid(maxWidth: 2000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  const [lang] = useLang();
  return (
    <div className="bg-AppDark  ">
      <div className="container py-10">
        <img
          src={specialProjects}
          alt="specialProjects"
          className="w-[200px]  my-3"
        />
        <Slider {...settings}>
          {special.nodes.map((proj) => (
            <Project
              key={proj.id}
              image={proj.project_image.asset.fluid}
              title={proj.projectTitle[lang]}
              description={proj.description[lang]}
              beneficiaries={proj.beneficiaries[lang]}
              location={proj.location[lang]}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SpecialProjects;

const Project = ({ image, title, description, beneficiaries, location }) => {
  return (
    <div className=" lg:flex gap-5 items-center">
      <div className="lg:w-1/2 mt-8 lg:mt-0 text-right">
        <h2 className=" text-AppGreen font-bold text-2xl  ">{title}</h2>
        <p className=" text-white text-xl ">{description}</p>
        <p className=" mt-3 text-AppGreen ">{beneficiaries}</p>
        <p className=" text-AppGreen ">{location}</p>
      </div>
      <div className=" lg:w-1/2 pl-5 w-[80%] mx-auto mt-5 ">
        <ImgWithBorder img={image} color="true" />
      </div>
    </div>
  );
};
