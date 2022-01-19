import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeroBackground from "../HeroBackground"
import Video from "./Video"
import Info from "./Info"
import Partners from "../homePage/Partners"
import { useLang } from "../../context/lang-context"
const IndexPage = () => {
  const [lang] = useLang()
  const { backImg } = useStaticQuery(graphql`
    {
      backImg: sanityPagesHero(title: { eq: "aboutImage" }) {
        # name
        # body
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
  return (
    <div>
      <HeroBackground
        image={backImg.image.asset.fluid}
        title={backImg.name}
        text={backImg.body}
      />
      <p>{lang}</p>
      <Video />
      <Info />
      <Partners />
    </div>
  )
}

export default IndexPage
