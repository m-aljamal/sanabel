import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const Background = ({ children, image, className }) => {
  return (
    <Wraper>
      <BackgroundImage
        Tag="div"
        fluid={image}
        className={className}
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </Wraper>
  )
}

export default Background
const Wraper = styled.div`
  background-position: center;
  background-size: cover;
`
