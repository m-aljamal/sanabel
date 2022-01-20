import React from "react";
import Background from "../Background";
import { useStaticQuery, graphql } from "gatsby";
import beneficiaries from "../../assets/icons/achievements/beneficiaries.svg";
import course from "../../assets/icons/achievements/course.svg";
import orphan from "../../assets/icons/achievements/orphan.svg";
import project from "../../assets/icons/achievements/project.svg";
import CountUp from "react-countup";
import banner_left from "../../assets/icons/achievements/banner_left.webp";
import banner_right from "../../assets/icons/achievements/banner_right.webp";
import { useLang } from "../../context/lang-context";
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

  const images = {
    beneficiaries,
    course,
    orphan,
    project,
  };
  const [lang] = useLang();

  return (
    <Background image={banner.image.asset.fluid}>
      <div className=" container">
        <img
          src={banner_right}
          alt="right"
          className=" absolute right-0 w-20"
        />
        <div className="   grid md:grid-cols-4 sm:grid-cols-2  grid-cols-1  text-center p-10">
          {achiev.nodes.map((ach) => (
            <div key={ach.id} className="place-self-center">
              <img src={images[ach.title]} className="w-24  " />
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
