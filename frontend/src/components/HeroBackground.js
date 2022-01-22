import React from "react";
import Background from "./Background";
import SocialLinks from "./socialLinks";
const HeroBackground = ({ image, title, text, home, textStyle }) => {
  return (
    <div>
      <Background image={image} className="h-screen ">
        <div className="  absolute bottom-0 w-full text-center       ">
          <div
            className={`bg-AppBack lg:w-2/5 md:w-1/2  mx-auto px-4  pt-5  rounded-t-xl ${textStyle}`}
          >
            <h1 className="   text-AppGreen font-bold text-3xl  ">{title}</h1>
            <p className={`text-white text-2xl  ${home ? "my-5" : "my-0"}`}>
              {text}
            </p>
            {home && (
              <SocialLinks className="socailLink flex justify-center py-2 px-2 bg-AppLiteBack w-3/4 mx-auto rounded-t-2xl  " />
            )}
          </div>
        </div>
      </Background>
    </div>
  );
};

export default HeroBackground;
