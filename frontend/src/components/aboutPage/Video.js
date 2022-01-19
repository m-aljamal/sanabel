import React from "react"
import styled from "styled-components"
import videoPoster from "../../assets/icons/about/videoPoster.webp"
import work from "../../assets/icons/about/work.svg"
import buildBatterFuture from "../../assets/icons/about/buildBatterFuture.svg"
import togatherToSucceed from "../../assets/icons/about/togatherToSucceed.svg"
const Video = () => {
  return (
    <VideoStyle className="pagePadding">
      <div className="container">
        <div className="text  ">
          <img src={work} alt="work" />
          <img src={togatherToSucceed} alt="togatherToSucceed" />
          <img src={buildBatterFuture} alt="buildBatterFuture" />
        </div>
        <div className="videoBorder">
          <div className="videoHolder ">
            <video controls poster={videoPoster} className="video radiusAll ">
              <source
                src="https://res.cloudinary.com/mohammadjamal/video/upload/v1601957264/eeq38kyvhazwvcq6c3g7.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </VideoStyle>
  )
}

export default Video
const VideoStyle = styled.section`
  background: var(--liteBack);
  .container {
    max-width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 5rem;
  }
  img {
    display: block;
    margin-left: auto;
  }
  img:nth-child(1) {
    width: 26%;
  }
  img:nth-child(2) {
    width: 50%;
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  img:nth-child(3) {
    width: 75%;
  }
  .videoBorder {
    position: relative;
  }
  .videoHolder {
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: -15px;
      border-radius: 25px;
      border: 3px solid var(--dark);
      top: -15px;
    }
  }
  .video {
    width: 100%;
    object-fit: cover;
    outline: none;
  }
  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
`
