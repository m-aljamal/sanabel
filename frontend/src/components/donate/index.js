import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeroBackground from "../HeroBackground"
import BankInfo from "./BankInfo"
import eurIcon from "../../assets/icons/donate/eur.svg"
import tlIcon from "../../assets/icons/donate/tl.svg"
import usdIcon from "../../assets/icons/donate/usd.svg"
import styled from "styled-components"
import Partners from "../homePage/Partners"
const Index = () => {
  const { backImg } = useStaticQuery(graphql`
    {
      backImg: sanityPagesHero(title: { eq: "donate" }) {
        # name
        # body
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
  const words = {
    ar: {
      eurCurr: "اليورو",
      usdCurr: "الدولار",
      tlCurr: "الليرة التركية",
    },
  }
  const { eurCurr, usdCurr, tlCurr } = words["ar"]
  return (
    <div>
      <HeroBackground
        image={backImg.image.asset.fluid}
        title={backImg.name}
        text={backImg.body}
      />
      <InfoStyle className="container">
        <BankInfo
          type={eurCurr}
          icon={eurIcon}
          iban="TR71 0001 0026 0889 0128 2350 03"
        />
        <BankInfo
          type={usdCurr}
          icon={usdIcon}
          iban="TR 9800 0100 2608 8901 2823 5002"
        />
        <BankInfo
          type={tlCurr}
          icon={tlIcon}
          iban="TR 2800 0100 2608 8901 2823 5001"
        />
      </InfoStyle>
      <Partners />
    </div>
  )
}

export default Index

const InfoStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 6rem;
`
