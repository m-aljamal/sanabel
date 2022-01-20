import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import ImgWithBorder from "../ImgWithBorder";
import latestNewsTitel from "../../assets/icons/latestNews.svg";
import { useLang } from "../../context/lang-context";
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="bg-AppLiteBack">
      <div className="container py-8">
        <div className="w-[200px] mx-auto pt-2">
          <img src={latestNewsTitel} alt="latest news" />
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
      <div className="w-1/2 relative ml-5">
        <ImgWithBorder img={news.news_image.asset.fluid} />
      </div>
      <div className=" w-1/2 mt-4 ">
        <h3 className="title">{news.newsTitle[lang]}</h3>
        <p className="textFit mt-4 desc">{news.description[lang]}</p>
        <p className="date">{news.date}</p>
      </div>
    </div>
  );
};

export default News;
const NewsStyle = styled.section`
   
   
  .text {
    text-align: end;
    width: 50%;
    margin-left: 3rem;
  }

  .image {
    width: 50%;
    position: relative;
    margin-left: 3rem;
  }
  .title {
    font-size: 2.5rem;
    font-weight: 700;
  }
  .desc {
    height: 30rem;
    overflow: hidden;
  }
  .date {
    color: var(--green);
  }
  .slick-dots {
    display: block !important;
    bottom: -40px;
  }
  li button:before {
    color: black;
  }
  .logo {
    width: 100%;
    text-align: center;
    .newsTitle {
      width: 18rem;
    }
  }
  @media (max-width: 991px) {
    .desc {
      height: 16rem;
      font-size: 1.5rem;
    }
    .date {
      font-size: 1.5rem;
    }
    .title {
      font-size: 2rem;
    }
  }
  @media (max-width: 380px) {
    .image {
      width: 60% !important;
      margin: 0 auto;
    }
  }
  @media (max-width: 380px) {
    .newsHolder {
      flex-direction: column-reverse;
    }
    .desc {
      height: auto;
    }
    .text {
      width: 85%;
      margin-top: 2rem;
    }
    .image {
      width: 85%;
    }
  }
`;
