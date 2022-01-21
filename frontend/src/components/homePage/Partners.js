import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Background from "../Background";
import Slider from "react-slick";
import Img from "gatsby-image";
import { text } from "../../data/text";
import { useLang } from "../../context/lang-context";
const Partners = () => {
  const [lang] = useLang();
  const { partners, icons } = useStaticQuery(graphql`
    {
      partners: sanityBanners(title: { eq: "partners" }) {
        id
        image {
          asset {
            fluid(maxWidth: 2000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      icons: allSanityPartners {
        nodes {
          logo {
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
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Background image={partners.image.asset.fluid}>
      <div className="lg:flex items-center container mx-auto ">
        <div className="py-8">
          <h2 className="text-AppDark font-bold text-2xl">
            {text[lang].partners}
          </h2>
          <p className="mt-4 text-white text-xl  ">{text[lang].partnersText}</p>
        </div>
        <div className="lg:w-[60%]">
          <Slider {...settings}>
            {icons.nodes[0].logo.map((icon, i) => (
              <Img
                fluid={icon.asset.fluid}
                alt="icon"
                className="icon"
                key={i}
              />
            ))}
          </Slider>
        </div>
      </div>
    </Background>
  );
};

export default Partners;
