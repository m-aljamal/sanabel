import React from "react";
import Img from "gatsby-image";
const ImgWithBorder = ({ img, color, imageStyle, borderStyle }) => {
  return (
    <div className="relative">
      <div
        className={`before:content-[''] before:absolute before:w-full before:h-full before:-left-[15px] before:rounded-3xl before:border-4 
      before:z-30 
      before:border-AppGreen ${borderStyle} `}
        color={color}
      >
        <Img fluid={img} alt="image" className={`rounded-3xl ${imageStyle}`} />
      </div>
    </div>
  );
};

export default ImgWithBorder;
