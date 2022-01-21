import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import ImgWithBorder from "../ImgWithBorder";
import { useLang } from "../../context/lang-context";
import AppTitle from "../AppTitle";
import { text } from "../../data/text";
const News = () => {
  const { news } = useStaticQuery(graphql`
    {
      news: allSanityNews {
        nodes {
          id
          description {
            ar
            en
          }
          date(formatString: "DD/MM/YYYY")
          newsTitle {
            ar
            en
          }
          news_image {
            asset {
              fluid(maxWidth: 2000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const [lang] = useLang();

  return (
    <div className="bg-AppLiteBack">
      <div className="container py-8">
        <div className=" flex justify-center ">
          <AppTitle style>{text[lang].news}</AppTitle>
        </div>
        <div className="">
          <Slider {...settings}>
            {news.nodes.map((news) => (
              <SingleNews news={news} key={news.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const SingleNews = ({ news }) => {
  const [lang] = useLang();
  return (
    <div className="  mt-20 ">
      <div className=" lg:w-[80%]  relative ml-5">
        <ImgWithBorder
          img={news.news_image.asset.fluid}
          imageStyle="lg:h-[250px] h-[300px]   "
          borderStyle=""
        />
      </div>
      <div
        className={`mt-4 ${
          lang === "en" ? "text-left" : "text-right"
        }  lg:w-[80%] text-gray-800`}
      >
        <h3 className="text-2xl text-center font-bold ">
          {news.newsTitle[lang]}
        </h3>
        <p className="  mt-4 ">{news.description[lang]}</p>
        <p className="text-AppGreen font-semibold">{news.date}</p>
      </div>
    </div>
  );
};

export default News;
