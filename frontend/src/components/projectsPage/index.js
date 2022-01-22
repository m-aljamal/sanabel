import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import HeroBackground from "../HeroBackground";
import Projects from "./projects";
import { useLang } from "../../context/lang-context";
const Index = () => {
  const { hero } = useStaticQuery(graphql`
    {
      hero: sanityPagesHero(title: { eq: "project" }) {
        ImageBody {
          ar
          en
        }
        imageTitle {
          ar
          en
        }
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
  `);
  const [lang] = useLang();
  return (
    <div>
      <HeroBackground
        image={hero.image.asset.fluid}
        title={hero.imageTitle[lang]}
        text={hero.ImageBody[lang]}
      />
      <Projects />
    </div>
  );
};

export default Index;
