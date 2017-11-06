react-hero-video
=========

This module exports a react styled component that plays a video meant for background video. The current method uses the [Youtube Embedded Video API](https://developers.google.com/youtube/player_parameters) but there are other methods to embed self hosted videos.

## Known Issues

The Youtube method doesnt work on iOS browsers. [Sources](https://www.fuzzyraygun.com/youtube-iframe-embeds-not-working-on-ios-devices-fix/)
We will eventually support [HTML5 Video](http://walterebert.com/blog/html5-video-autoplay-mobile-revisited/)

## Demo

Check out our Demo at <https://sw-yx.github.io/react-hero-video/demo/>

![react hero video demo](react-hero-video.gif)

## Installation

  `npm install react-hero-video`

## Usage

    import React from "react";

    import { HeroVideo } from "react-hero-video";

    const HeroVideoDemo = () => (
      <HeroVideo
        videoSrc="https://www.youtube.com/embed/W0LHTWG-UmQ?autoplay=1&loop=1&playlist=W0LHTWG-UmQ"
        // https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ
        videoSubtitle="Instantly make people think you are a 10x coder with this one secret trick!"
        videoTitle="Easy Hero Video in React"
      >
        <p>
          This is from a child element
        </p>
      </HeroVideo>
    );

    export default HeroVideoDemo;

  
  
  It's that simple!


## Tests

  `npm test` - not maintained yet

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## Inspirations

- <https://developers.google.com/youtube/player_parameters>
- <https://hackernoon.com/building-a-react-component-library-part-1-d8a1e248fe6c>
- <http://thenewcode.com/500/Use-YouTube-Videos-as-Fullscreen-Web-Page-Backgrounds>
- <https://coverr.co/>

## Research

- <https://www.wired.com/2015/01/gif-tools/>
- <https://eek.ro/why-bpg-will-replace-gifs-and-not-only/>
- <http://walterebert.com/blog/using-animated-gifs-or-not/>
- <https://www.fuzzyraygun.com/youtube-iframe-embeds-not-working-on-ios-devices-fix/>