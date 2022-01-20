import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import HeroBackground from "../HeroBackground";
import { useLang } from "../../context/lang-context";
const Hero = () => {
  const { images } = useStaticQuery(graphql`
    {
      images: allSanityHomePageHero {
        nodes {
          name {
            ar
            en
          }
          title
          body {
            ar
            en
          }
          id
          image {
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
    speed: 2500,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    pauseOnHover: false,
  };
  const [lang] = useLang();
  return (
    <Slider {...settings}>
      {images.nodes.map((image) => (
        <HeroBackground
          key={image.id}
          image={image.image.asset.fluid}
          title={image.name[lang]}
          text={image.body[lang]}
          home
        />
      ))}
    </Slider>
  );
};

export default Hero;
