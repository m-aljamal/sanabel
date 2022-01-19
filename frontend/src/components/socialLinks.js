import React from "react"

import styled from "styled-components"
import { social } from "../data/links"

const SocialLinks = ({ className }) => {
  return (
    <SocialStyle className={className}>
      {social.map((link, i) => (
        <a target="_blank" href={link.link} rel="noreferrer" key={i}>
          <img src={link.image} alt="socialLink" />
        </a>
      ))}
    </SocialStyle>
  )
}

export default SocialLinks

const SocialStyle = styled.div`
  a {
    &:not(:last-of-type) {
      margin-right: 2rem;
    }
  }
  img {
    width: 35px;
  }
`
