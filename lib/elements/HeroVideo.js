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
  top: 0;
  color: #fff;
`;
const VidInfo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 33%;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 1rem;
  font-family: Avenir, Helvetica, sans-serif;
`;
const VidH1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0;
  line-height: 1.2;
`;
class HeroVideo extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Background>
          <Foreground>
            <IFrame
              allowfullscreen
              frameborder="0"
              src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ"
            />
          </Foreground>
        </Background>

        <VidContent>
          <VidInfo>
            <VidH1>YouTube Fullscreen Background Demo</VidH1>
            <p>
              The International Space Station orbits the Earth every 92 minutes,
              with its crew seeing a sunrise 15 times a day. It exists as a
              scientific, educational, and engineering platform in low orbit,
              330 to 435 kilometres above the Earth.
            </p>
          </VidInfo>
        </VidContent>
      </div>
    );
  }
}
export default HeroVideo;
