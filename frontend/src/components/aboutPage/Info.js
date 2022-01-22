import React from "react";
import styled from "styled-components";
import name from "../../assets/icons/about/sanabelAmal.svg";
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
  return (
    <div className={`flex items-center    ${className}`}>
      <div className={`w-1/2 ${textSecStyle} mr-16`}>
        <img src={icon} alt="establishIcon" className="w-20 -mt-10" />
        <h2>{title}</h2>
        <p className="w mt-3 pb-5  ">{body}</p>
      </div>
      <div className="w-1/2 relative">
        <div className={`image ${imageSecStyle}`}>
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
        <div className="flex justify-center py-8">
          <AppTitle>{text[lang].name}</AppTitle>
        </div>
        <InfoHolder
          img={estImg.image.asset.fluid}
          title={text[lang].about.foundingTitle}
          body={text[lang].about.foundingBody}
          icon={establishIcon}
        />
        <div className="pt-5"></div>
        <InfoHolder
          img={visionImg.image.asset.fluid}
          title={text[lang].about.visionTitle}
          body={text[lang].about.visionBody}
          className=" flex-row-reverse"
          textSecStyle="textSecStyle"
          imageSecStyle="imageSecStyle"
          icon={vision}
        />
      </div>
    </div>
  );
};

export default Info;
const InfoStyle = styled.section`
  .name {
    width: 25rem;
    margin: 0 auto;
  }
  .image {
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 2%;
      border: 4px solid var(--green);
      top: 15px;
      z-index: 1;
      border-bottom-right-radius: 30px;
      border-top-right-radius: 30px;
    }
  }
  .imageSecStyle {
    &::before {
      left: -2%;
      border-bottom-left-radius: 30px;
      border-top-left-radius: 30px;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }
  .imageContainer {
    width: 60%;
    position: relative;
  }
  .text {
    width: 35%;
    background: rgb(146, 207, 88, 0.2);
    text-align: center;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
  }
  .textSecStyle {
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .icon {
    width: 100px;
    margin-top: -30px;
  }
  .infoContainer {
    display: flex;
    align-items: center;
  }
  .secoundStyle {
    flex-direction: row-reverse;
    margin-top: 60px;
  }
  h2 {
    color: var(--green);
    font-weight: bold;
  }
  p {
    font-size: 2.5rem;
    width: 80%;
    margin: 0 auto;

    text-align: justify;
    text-align-last: center;
  }
  @media (max-width: 1380px) {
    .imageContainer {
      width: 50%;
    }
    .text {
      width: 45%;
    }
    p {
      font-size: 1.8rem;
      width: 95%;
    }
    .icon {
      width: 75px;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 995px) {
    .infoContainer {
      flex-direction: column-reverse;
    }
    .text,
    .imageContainer {
      width: 90%;
      margin-right: auto;
    }
    .text {
      margin-bottom: 2rem;
    }

    .secoundStyle {
      .imageContainer,
      .textSecStyle {
        margin-left: auto;
        margin-right: 0;
      }
    }
  }
  @media (max-width: 736px) {
    .name {
      width: 20rem;
    }
  }
`;
