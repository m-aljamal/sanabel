import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Background from "../components/Background";
import Img from "gatsby-image";
import { social } from "../data/links";
import { footerText } from "../data/text";
import { useLang } from "../context/lang-context";
const Footer = () => {
  const { footer, logo } = useStaticQuery(graphql`
    {
      footer: sanityBanners(title: { eq: "footer" }) {
        image {
          asset {
            fluid(maxWidth: 2000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      logo: sanityBanners(title: { eq: "footerLogo" }) {
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
    <Background image={footer.image.asset.fluid}>
      <div className="container">
        <div className=" md:flex       text-center md:justify-around py-16 ">
          <div className=" text-white">
            <h3 className=" font-bold border-b-2 border-AppGreen w-fit  mx-auto">
              {footerText[lang].call}
            </h3>

            <div className="mt-5">
              <span className="ml-4"> {footerText[lang].addressTitle} </span>
              {footerText[lang].address}
            </div>

            <div className="flex  text-right justify-center  md:justify-start  mt-4">
              <span className="ml-4">{footerText[lang].phone}</span>
              <p style={{ direction: "ltr" }}>
                <a href={`tel: ${footerText.phone}`}>{footerText.phone}</a>
                <br />
                <a href={`tel: ${footerText.phone2}`}>{footerText.phone2}</a>
              </p>
            </div>

            <div className="mt-4">
              <span className="">{footerText[lang].email}</span>
              <br />
              <a href={`mailto:${footerText.email}`}>{footerText.email}</a>
              <br />
              <a href={`mailto:${footerText.email2}`}>{footerText.email2}</a>
            </div>
          </div>
          <div className="w-60 mx-auto">
            <Img fluid={logo.image.asset.fluid} alt="" />
            <p className=" text-AppGreen mt-8">&copy; {footerText[lang].allRight} </p>
          </div>

          <div className="text-white   ">
            <h4 className="font-bold border-b-2 border-AppGreen w-fit  mx-auto mt-8 md:mt-0">
              {footerText[lang].contact}
            </h4>

            <p className="mt-4">{footerText[lang].socialText}</p>
            <div className="flex mt-4 justify-center gap-3 ">
              {social.map((item) => (
                <SocialLinks
                  key={item.link}
                  link={item.link}
                  imgSrc={item.footer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

const SocialLinks = ({ link, imgSrc }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={imgSrc} alt="social media" className="w-10" />
    </a>
  );
};

export default Footer;
