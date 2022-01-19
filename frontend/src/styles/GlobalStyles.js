import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --green: #92CF58;
    --dark: #374A43;
   --back: rgb(55, 74, 67, 0.5);
   --liteBack: rgb(146, 207, 88, 0.3);
   --gradiant: linear-gradient(
      90deg,
      rgba(146, 207, 88, 1) 0%,
      rgba(55, 74, 67, 1) 100%
    );
    --shadow:0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
  }

   
  

`

export default GlobalStyles
