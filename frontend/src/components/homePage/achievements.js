import React from "react";
import Background from "../Background";
import { useStaticQuery, graphql } from "gatsby";

import CountUp from "react-countup";
import banner_left from "../../assets/icons/achievements/banner_left.webp";
import banner_right from "../../assets/icons/achievements/banner_right.webp";
import { useLang } from "../../context/lang-context";
import Img from "gatsby-image";
const Achievements = () => {
  const { achiev, banner } = useStaticQuery(graphql`
    {
      achiev: allSanityWorkAchievements {
        nodes {
          id
          achievements {
            ar
            en
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          number
        }
      }
      banner: sanityBanners(title: { eq: "achievements" }) {
        id
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
  console.log(achiev);
  return (
    <Background image={banner.image.asset.fluid}>
      <div className=" container">
        <img
          src={banner_right}
          alt="right"
          className=" absolute right-0 w-20"
        />
        <div className="grid md:grid-cols-4 sm:grid-cols-2  grid-cols-1   text-center p-10">
          {achiev.nodes.map((ach) => (
            <div key={ach.id} className="place-self-center py-6 md:py-0">
              <Img fluid={ach.image.asset.fluid} className="w-24" />
              <CountUp
                className="text-3xl font-bold"
                separator=" "
                delay={3}
                duration={35}
                end={ach.number}
              />
              <h2 className=" text-2xl">{ach.achievements[lang]}</h2>
            </div>
          ))}
        </div>
        <img
          src={banner_left}
          alt="left"
          className=" absolute left-0 bottom-0 w-16"
        />
      </div>
    </Background>
  );
};

export default Achievements;
