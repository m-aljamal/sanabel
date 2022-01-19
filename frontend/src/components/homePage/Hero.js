import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import HeroBackground from "../HeroBackground"
const Hero = () => {
  const { images } = useStaticQuery(graphql`
    {
      images: allSanityHomePageHero {
        nodes {
          # name
          title
          # body
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
  `)
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
  }

  return (
    <Slider {...settings}>
      {images.nodes.map(image => (
        <HeroBackground
          key={image.id}
          image={image.image.asset.fluid}
          title={image.name}
          text={image.body}
          home
        />
      ))}
    </Slider>
  )
}

export default Hero
