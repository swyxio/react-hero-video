import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background: #000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -99;
`;
const Foreground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  @media (min-aspect-ratio: 16/9) {
    height: 300%;
    top: -100%;
  }
  @media (max-aspect-ratio: 16/9) {
    width: 300%;
    left: -100%;
  }
`;
const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const VidContent = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 100%;
  color: #fff;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
const VidInfo = styled.div`
  font-family: Avenir, Helvetica, sans-serif;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
`;
const VidH1 = styled.h1`
  font-size: 3.5rem;
  line-height: 4.5rem;
  font-weight: 700;
  padding: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;
class HeroVideo extends React.Component {
  componentDidMount() {}
  render() {
    const { videoTitle, videoSubtitle, videoSrc } = this.props;
    return (
      <div>
        <Background>
          <Foreground>
            <IFrame allowfullscreen frameborder="0" src={videoSrc} />
          </Foreground>
        </Background>

        <VidContent>
          <VidInfo>
            {videoTitle && <VidH1>{videoTitle}</VidH1>}
            {videoSubtitle && <p>{videoSubtitle}</p>}
          </VidInfo>
          {this.props.children}
        </VidContent>
      </div>
    );
  }
}
export default HeroVideo;
