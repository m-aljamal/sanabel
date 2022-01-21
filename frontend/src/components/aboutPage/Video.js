import React from "react";
import videoPoster from "../../assets/icons/about/videoPoster.webp";
import { text } from "../../data/text";
import { useLang } from "../../context/lang-context";
import AppTitle from "../../components/AppTitle";
const Video = () => {
  const [lang] = useLang();
  return (
    <div className="bg-AppLiteBack">
      <div className="container md:flex py-8 items-center justify-center gap-32   ">
        <div className="   space-y-12 text-3xl ">
          <AppTitle>{text[lang].about.videoTitle}</AppTitle>
          <AppTitle style>{text[lang].about.videoText}</AppTitle>
          <AppTitle>{text[lang].about.videoText2}</AppTitle>
        </div>
        <div className=" relative md:w-1/2 mt-10 md:mt-0">
          <div
            className="before:content-[''] before:absolute before:w-full before:h-full before:-left-[15px] before:rounded-3xl before:border-4 
      before:z-30 
      before:border-AppDark "
          >
            <video controls poster={videoPoster} className="video radiusAll ">
              <source
                src="https://res.cloudinary.com/mohammadjamal/video/upload/v1601957264/eeq38kyvhazwvcq6c3g7.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
