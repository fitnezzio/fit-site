import React from 'react';
import {useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styled from 'styled-components';

import one from 'assets/Gallery/one.png';
import two from 'assets/Gallery/two.png';
import three from 'assets/Gallery/three.png';
import four from 'assets/Gallery/four.png';
import five from 'assets/Gallery/five.png';

const images = [
  {id: 1, icon: one},
  {id: 2, icon: two},
  {id: 3, icon: three},
  {id: 4, icon: four},
  {id: 5, icon: five},
];

const LazySlider = styled.div`
  height: 500px;
  color: rgb(131, 168, 52);
  font-weight: 700;
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
`;

const NavigationWrapper = styled.div`
  position: relative;
`;

const Dots = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #8CB712;
  }

`;

const ArrowsContainer = styled.div`
  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #8CB712;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }
`;

const ArrowLeft = ({disabled, onClick}) => {
  const disabeld = disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={onClick}
      className={`arrow arrow--left${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
    </svg>
  )
}

const ArrowRight = ({disabled, onClick}) => {
  const disabeld = disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={onClick}
      className={`arrow arrow--right${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
    </svg>
  )
}

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  });

  return (
    <>
      <NavigationWrapper>
        <div ref={sliderRef} className="keen-slider">
          {images.map(image => (
            <LazySlider key={image.id} className="keen-slider__slide">
              <img src={image.icon} alt='Screenshot do app'/>
            </LazySlider>
          ))}
          {slider && (
            <ArrowsContainer>
              <ArrowLeft
                onClick={(e) => e.stopPropagation() || slider.prev()}
                disabled={currentSlide === 0}
              />
              <ArrowRight
                onClick={(e) => e.stopPropagation() || slider.next()}
                disabled={currentSlide === slider.details().size - 1}
              />
            </ArrowsContainer>
          )}
        </div>
      </NavigationWrapper>
      {slider && (
        <Dots>
          {[...Array(slider.details().size).keys()].map((idx) => (
              <button
                type='button'
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={`dot${currentSlide === idx ? ' active' : ''}`}
              />
            ))}
        </Dots>
      )}
    </>
  )
}

export default Slider;
