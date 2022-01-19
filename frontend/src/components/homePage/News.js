import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import ImgWithBorder from "../ImgWithBorder"
import latestNewsTitel from "../../assets/icons/latestNews.svg"
const News = () => {
  const { news } = useStaticQuery(graphql`
    {
      news: allSanityNews {
        nodes {
          id
          description
          date(formatString: "DD/MM/YYYY")
          # title
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
  `)
  const settings = {
    dots: true,
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
  }
  return (
    <NewsStyle className="pagePadding">
      <div className="logo">
        <img src={latestNewsTitel} alt="latest news" className="newsTitle" />
      </div>
      <div className="container mt-5 ">
        <Slider {...settings}>
          {news.nodes.map(news => (
            <div className="newsHolder " key={news.id}>
              <div className="text">
                <h3 className="title">{news.title}</h3>
                <p className="textFit mt-4 desc">{news.description}</p>
                <p className="date">{news.date}</p>
              </div>
              <div className="image">
                <ImgWithBorder img={news.news_image.asset.fluid} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </NewsStyle>
  )
}

export default News
const NewsStyle = styled.section`
  background: var(--liteBack);

  .container {
    max-width: 70%;
    margin: 0 auto;
  }
  .newsHolder {
    display: flex !important;
    margin-top: 16px;
  }
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
`
