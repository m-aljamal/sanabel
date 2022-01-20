import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Background from "../Background";
import Slider from "react-slick";
import Img from "gatsby-image";
const Partners = () => {
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
      <ParnersStyle className="pagePadding container">
        <div className="logo">
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
        <div className="text textFit">
          <h2>شركاؤنا في العمل الإنساني</h2>
          <p style={{ marginTop: "20px" }} className="mt-4 w">
            تســعى منظمــة ســنابل الأمــل لبنــاء علاقــات وشــراكات مــع
            المنظمــات الدوليــة والمحليــة للوصــول إلــى أكبــر قــدر ممكــن
            مــن الإســتفادة للمجتمع السوري
          </p>
        </div>
      </ParnersStyle>
    </Background>
  );
};

export default Partners;
const ParnersStyle = styled.section`
  display: flex;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;

  .text {
    width: 40%;
    margin-left: 5%;
  }
  .logo {
    width: 55%;
  }
  h2 {
    color: var(--green);
    font-size: 3rem;
    font-weight: bold;
    padding-bottom: 1rem;

    border-bottom: 2px solid var(--green);
    display: inline-block;
  }
  @media (max-width: 991px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    .text {
      width: 90%;
      margin-left: 0;
    }
    .logo {
      margin-top: 2rem;
      width: 90%;
    }
  }
`;
