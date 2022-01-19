import React from "react"
import styled from "styled-components"
import specialProjects from "../../assets/icons/specialProjects/specialProjects.svg"
import { useStaticQuery, graphql } from "gatsby"
import ImgWithBorder from "../ImgWithBorder"
import Slider from "react-slick"
const SpecialProjects = () => {
  const { special } = useStaticQuery(graphql`
    {
      special: allSanitySpecialProjects {
        nodes {
          id
          location
          # title
          description
          beneficiaries
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
  `)
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  }
  return (
    <div className="bg-AppDark  ">
      <div className="container py-10">
        <img
          src={specialProjects}
          alt="specialProjects"
          className="w-1/4  my-3"
        />

        <Slider {...settings}>
          {special.nodes.map(proj => (
            <Project
              image={proj.project_image.asset.fluid}
              title={proj.title}
              description={proj.description}
              beneficiaries={proj.beneficiaries}
              location={proj.location}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SpecialProjects

const Project = ({ image, title, description, beneficiaries, location }) => {
  return (
    <div className=" flex gap-5">
      <div className=" w-1/2  pl-5 ">
        <ImgWithBorder img={image} color="true" />
      </div>
      <div className="w-1/2 text-right">
        <h2 className=" text-AppGreen font-bold text-xl ">{title}</h2>
        <p className=" text-white text-lg      ">{description}</p>
        <p className=" mt-3 text-AppGreen ">{beneficiaries}</p>
        <p className=" text-AppGreen ">{location}</p>
      </div>
    </div>
  )
}
