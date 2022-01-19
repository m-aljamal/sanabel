import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Background from "../components/Background"
import styled from "styled-components"
import Img from "gatsby-image"
import facebook from "../assets/icons/footer/facebook.svg"
import instegram from "../assets/icons/footer/instegram.svg"
import twitter from "../assets/icons/footer/twitter.svg"
import youtube from "../assets/icons/footer/youtube.svg"
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
  `)
  const info = {
    ar: {
      addTitle: `:العنوان`,
    },
    address: `
    سوريا _ريف حلب الشمالي _ أعزاز
    `,
  }
  return (
    <Background image={footer.image.asset.fluid}>
      <FooterStyle className="  pagePadding">
        <div className="contact w">
          <Img
            fluid={logo.image.asset.fluid}
            alt="footer logo"
            className="footerLogo"
          />
          <div className=" withLine mb-4 call ">
            <div className="line"> </div>
            <h3 className="w ">اتصل بنا</h3>
          </div>

          <div className="add" style={{marginTop: '25px'}}>
            <span className="ml-4"> {info.ar.addTitle} </span>
            {info.address}
          </div>

          <p className="text mt-4" style={{marginTop: '25px'}}>
            <a href="tel: +90 552 578 67 54">+90 552 578 67 54</a>
            <span className="ml-4"> :الهاتف</span>
            <br />
            <a style={{ marginRight: "65px" }} href="tel: +352 681 557 130">
              +352 681 557 130
            </a>
          </p>

          <p className="text mt-4" style={{marginTop: '25px'}}>
            <a href="mailto:info@sanabelamal.org">info@sanabelamal.org</a>
            <span className="ml-4">:الإيميل</span>
            <br />
            <a
              style={{ marginRight: "65px" }}
              href="mailto:sanabellamal@hotmail.com"
            >
              sanabellamal@hotmail.com
            </a>
          </p>
        </div>
        <div className="logo">
          <Img fluid={logo.image.asset.fluid} alt="footer logo" />
          <p className=" rights">&copy; جميع الحقوق محفوظة </p>
        </div>

        <div className="  w">
          <div className=" withLine   contantHolder">
            <div className="line"> </div>
            <h4 className="footerTitle w">للتواصل</h4>
          </div>
          <p className="text end">
            يسرنا تواصلكم والإجابة على استفساراتكم <br /> عبر صفحاتنا على مواقع
            التواصل الإجتماعي
          </p>
          <div className="socialLinks mt-5">
            <a
              href="https://www.facebook.com/SanabelAlamal.S.A.O/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebookFooter" />
            </a>
            <a
              href="https://www.instagram.com/sanabelalamal.s.a.o/?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instegram} alt="instgramFooter" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC_emQ9asteYcbTs4_u0DhFw"
              target="_blank"
              rel="noreferrer"
            >
              <img src={youtube} alt="youtubeFooter" />
            </a>
            <a
              href="https://twitter.com/Sanabelamalorg?s=08"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitterFooter" />
            </a>
          </div>
          <p className=" rights footerRights">&copy; جميع الحقوق محفوظة </p>
        </div>
      </FooterStyle>
    </Background>
  )
}

export default Footer
const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;

  .socialMedia {
    width: 25%;
    align-self: flex-end;
  }
  .logo {
    width: 20%;
  }
  .contact {
    width: 30%;
    text-align: end;
    align-self: flex-center;
  }
  .withLine {
    display: flex;
    justify-content: flex-end;
    .line {
      color: white;
      margin-right: 10px;
      background-color: white;
      width: 50px;
      height: 2px;
      margin-top: auto;
    }
  }
  .contantHolder {
    margin-bottom: 5rem;
  }
  .end {
    margin-bottom: 4rem;
  }
  .add {
    display: flex;
    flex-direction: row-reverse;
  }
  .socialLinks {
    display: flex;
    justify-content: flex-end;
    justify-content: center;
    img {
      width: 35px;
      margin-left: 10px;
    }
  }
  .socialLinks {
    display: flex;
    justify-content: flex-end;
    img {
      width: 35px;
      margin-left: 10px;
    }
  }
  .rights {
    text-align: center;
    color: var(--green);
    padding-top: 10rem;
  }
  .footerLogo {
    display: none;
  }
  .footerRights {
    display: none !important;
  }
  @media (max-width: 1199px) {
    .contantHolder {
      margin-bottom: 1rem !important;
    }
  }
  @media (max-width: 991px) {
    .contact {
      width: 35%;
    }
    .contantHolder {
      margin-bottom: 2rem !important;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    .rights {
      padding-top: 2rem;
    }
    .contact,
    .socialMedia {
      width: 95%;
      margin: 0rem 1rem;
    }
    .logo {
      display: none;
    }
    .socialMedia {
      margin-top: 4rem;
    }
    .socialLinks,
    .contantHolder,
    .call {
      justify-content: center;
    }

    .text {
      text-align: center;
    }

    .add {
      text-align: justify;
      text-align-last: end;
      width: 80%;
      margin: 0 auto;
    }
    .footerLogo {
      display: block;
      width: 50%;
      margin: 0 auto 35px auto;
    }
  }
  .footerRights {
    display: block;
  }
`
