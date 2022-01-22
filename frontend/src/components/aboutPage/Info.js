import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import establishIcon from "../../assets/icons/about/establishIcon.svg";
import vision from "../../assets/icons/about/vision.svg";
import { useLang } from "../../context/lang-context";
import { text } from "../../data/text";
import AppTitle from "../AppTitle";
const InfoHolder = ({
  img,
  title,
  body,
  className,
  textSecStyle,
  imageSecStyle,
  icon,
}) => {
  const [lang] = useLang();
  return (
    <div className={`lg:flex items-center  ${className}`}>
      <div
        className={`lg:w-1/2     bg-AppLiteBack px-4 text-center  ${textSecStyle}`}
      >
        <img src={icon} alt="establishIcon" className="w-20 -mt-10 mx-auto" />
        <h2 className="mt-2 text-AppGreen font-bold text-xl ">{title}</h2>
        <p className="w mt-3 pb-5  text-white text-lg ">{body}</p>
      </div>
      <div className="lg:w-1/2 relative">
        <div className={` ${imageSecStyle}`}>
          <Img fluid={img} alt="establishing" />
        </div>
      </div>
    </div>
  );
};

const Info = () => {
  const { estImg, visionImg } = useStaticQuery(graphql`
    {
      estImg: sanityBanners(title: { eq: "establishing" }) {
        image {
          asset {
            fluid(maxWidth: 2000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      visionImg: sanityBanners(title: { eq: "vision" }) {
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
    <div className="bg-AppDark">
      <div className=" py-5">
        <div className="flex justify-center py-8 mb-8 lg:mb-0 ">
          <AppTitle>{text[lang].name}</AppTitle>
        </div>
        <InfoHolder
          img={estImg.image.asset.fluid}
          title={text[lang].about.foundingTitle}
          body={text[lang].about.foundingBody}
          icon={establishIcon}
          textSecStyle={` ${
            lang === "ar"
              ? "rounded-tr-2xl rounded-br-2xl mr-16"
              : "rounded-tl-2xl rounded-bl-2xl ml-16"
          }   `}
          imageSecStyle=" mr-16 mt-8 lg:mr-0 lg:mt-0"
        />
        <div className="pt-16"></div>
        <InfoHolder
          img={visionImg.image.asset.fluid}
          title={text[lang].about.visionTitle}
          body={text[lang].about.visionBody}
          className=" flex-row-reverse"
          textSecStyle={` ${
            lang === "ar"
              ? "ml-16 mr-0 rounded-tl-2xl rounded-bl-2xl "
              : "mr-16 rounded-tr-2xl rounded-br-2xl"
          }   `}
          imageSecStyle="ml-16 mt-8 lg:ml-0 lg:mt-0"
          icon={vision}
        />
      </div>
    </div>
  );
};

export default Info;
