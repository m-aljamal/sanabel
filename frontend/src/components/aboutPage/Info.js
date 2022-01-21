import React from "react";
import styled from "styled-components";
import name from "../../assets/icons/about/sanabelAmal.svg";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import establishIcon from "../../assets/icons/about/establishIcon.svg";
import vision from "../../assets/icons/about/vision.svg";

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
    <div className={`infoContainer   ${className}`}>
      <div className="imageContainer">
        <div className={`image ${imageSecStyle}`}>
          <Img fluid={img} alt="establishing" />
        </div>
      </div>
      <div className={`text ${textSecStyle}`}>
        <img src={icon} alt="establishIcon" className="icon" />
        <h2>{title}</h2>
        <p className="w mt-3 pb-5  ">{body}</p>
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

  const words = {
    ar: {
      esta: {
        title: ":تأسيسنا",
        body: `
            تأسست عام 2016 باسم مؤسسة الشام
            التعليميـــة وعملـــت فـــي الداخل الســـوري،
            حتـــى عـــام 2019 حيـــث تـــم  ترخيـــص مكتب  
            başaklar Umut للمنظمة في تركيا باسم `,
      },
      vision: {
        title: ":رؤيتنا المستقبلية",
        body: `
          نهـــدف إلى تأمين ســـبل العيش الكريمة
للمحتاجين فـــي المجتمع، وبناء جيل واع،
ونشـــر الثقافـــة والتنميـــة بيـــن الأفـــراد؛
لتحقيـــق أكبـــر نجـــاح والوصول إلـــى الإبداع
   والرقـــي في كافـــة مجالات الحيـــاة ( ثقافياً, طبياً, تنموياً, إغاثياً)
          `,
      },
    },
  };
  return (
    <div className="bg-AppDark">
      <div className="container py-10">
        <InfoHolder
          img={estImg.image.asset.fluid}
          title={words["ar"].esta.title}
          body={words["ar"].esta.body}
          icon={establishIcon}
        />
        <div className="pt-5"></div>
        <InfoHolder
          img={visionImg.image.asset.fluid}
          title={words["ar"].vision.title}
          body={words["ar"].vision.body}
          className="secoundStyle"
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
  padding-bottom: 6rem;
  background: var(--dark);

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
