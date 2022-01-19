import React from "react"
import styled from "styled-components"
const AllRights = () => {
  const word = {
    ar: {
      text: " ﺟﻤﻴﻊ اﻟﺤﻘﻮق ﻣﺤﻔﻮﻇﺔ",
      name: " هيئة تطوير التعليم ",
    },
  }
  return (
    <Wraper>
      <h4 className="rights">
        {word.ar.text}
        {` ${new Date().getFullYear()}`} &copy;
        {word.ar.name}
      </h4>
    </Wraper>
  )
}

export default AllRights
const Wraper = styled.section`
  padding: 15px 0;
  text-align: center;
  background: ${props => props.theme.blue};
  word-spacing: 3px;
  h4 {
    color: white;
    font-weight: 500;
  }
`
