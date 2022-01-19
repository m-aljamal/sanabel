import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
const ImgWithBorder = ({ img, className, color }) => {
  return (
    <div className="relative">
      <div
        className=" before:content-[''] before:absolute before:w-full before:h-full before:-left-[15px] before:rounded-3xl before:border-4 
      before:z-30 
      before:border-AppGreen "
        color={color}
      >
        <Img fluid={img} alt="image" className="rounded-3xl" />
      </div>
    </div>
  )
}

export default ImgWithBorder
const ImgStyle = styled.div`
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: -15px;
    border-radius: 25px;
    border: 3px solid ${props => props.color && "var(--green)"};
    top: -15px;
    z-index: 1;
  }
`
