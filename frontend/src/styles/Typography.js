import { createGlobalStyle } from "styled-components"
import font from "../assets/fonts/Tajawal-Regular.ttf"

const Typography = createGlobalStyle`
  @font-face {
    font-family: Tajawal;
    src: url(${font});
  }
 
  body{
    font-family: Tajawal, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important; 
  }
   
.slick-dots {
    display: flex !important;
    flex-direction: column;
    bottom: 50%;

    li.slick-active button:before {
      color: #92CF58;
    }
    li button:before {
      font-size: 10px;
      color:white;
    }
  }

   
`

export default Typography
