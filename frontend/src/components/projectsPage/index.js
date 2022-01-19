import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeroBackground from "../HeroBackground"
import Projects from './projects'
const Index = () => {
  const {hero} = useStaticQuery(graphql`
    {
      hero:sanityPagesHero(title: { eq: "project" }) {
        # body
        # name
        title
        image {
          asset {
            fluid(maxWidth: 2000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)
  return(
       <div>
     <HeroBackground image={hero.image.asset.fluid} title={hero.name} text={hero.body}/> 
     <Projects/>
  </div>)
}

export default Index
