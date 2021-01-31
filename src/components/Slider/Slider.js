import React from 'react';
import {useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styled from 'styled-components';
import useWindowSize from 'utils/useWindowSize';

import one from 'assets/Gallery/one.png';
import two from 'assets/Gallery/two.png';
import three from 'assets/Gallery/three.png';
import four from 'assets/Gallery/four.png';
import five from 'assets/Gallery/five.png';

const images = [
  {icon: one, alt: 'Aa'},
  {icon: two, alt: 'Bb'},
  {icon: three, alt: 'Cc'},
  {icon: four, alt: 'Dd'},
  {icon: five, alt: 'Ee'},
];

const LazySlider = styled.div`
  height: 500px;
  color: rgb(131, 168, 52);
  font-weight: 700;
  background: url("https://keen-slider.io/images/loader.svg") no-repeat center;
  background-size: 100px;
  min-height: auto;

  img {
    background-color: transparent;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
  }
`

const Slider = () => {
  const { width } = useWindowSize();

  let slidesPerView;
  if (width <= 760) {
    slidesPerView = 1;
  } else if (width > 760 && width <= 990) {
    slidesPerView = 2;
  } else {
    slidesPerView = 3;
  }

  const [sliderRef] = useKeenSlider({
    slidesPerView,
    loop: false,
    initial: 1,
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((image, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <LazySlider key={idx} className="keen-slider__slide">
          <img src={image.icon} alt={image.alt}/>
        </LazySlider>
      ))}
    </div>
  )
}

export default Slider;
