import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import HeroBackground from "../HeroBackground";
import Form from "./Form";
import { useLang } from "../../context/lang-context";
const Index = () => {
  const { backImg } = useStaticQuery(graphql`
    {
      backImg: sanityPagesHero(title: { eq: "contact" }) {
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
  const [lang] = useLang();
  return (
    <div>
      <HeroBackground
        image={backImg.image.asset.fluid}
        title={backImg.imageTitle[lang]}
        text={backImg.ImageBody[lang]}
        textStyle="mb-8"
      />
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d354.52772178631903!2d37.38428170371465!3d37.0681749659075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1531e6adb5ce8161%3A0x96b802d3f6ea4618!2sBostanc%C4%B1%2C%2027400%20%C5%9Eahinbey%2FGaziantep!3m2!1d37.0678051!2d37.386395799999995!5e0!3m2!1sen!2str!4v1601825689733!5m2!1sen!2str"
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          title="sanabelAlamal location"
          className="rounded-lg -mt-8"
        ></iframe>
        <Form />
      </div>
    </div>
  );
};

export default Index;
