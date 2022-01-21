import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import HeroBackground from "../HeroBackground";
import Video from "./Video";
import Info from "./Info";
import Partners from "../homePage/Partners";
import { useLang } from "../../context/lang-context";
const IndexPage = () => {
  const [lang] = useLang();
  const { backImg } = useStaticQuery(graphql`
    {
      backImg: sanityPagesHero(title: { eq: "aboutImage" }) {
        imageTitle {
          ar
          en
        }
        ImageBody {
          ar
          en
        }
        image {
          asset {
            fluid(maxWidth: 2000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `);
  console.log(backImg);
  return (
    <div>
      <HeroBackground
        image={backImg.image.asset.fluid}
        title={backImg.imageTitle[lang]}
        text={backImg.ImageBody[lang]}
      />

      <Video />
      <Info />
      <Partners />
    </div>
  );
};

export default IndexPage;
