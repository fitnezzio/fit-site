import React from 'react';
import {useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styled from 'styled-components';

const images = [
  {icon: 'https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80', alt: 'Aa'},
  {icon: 'https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80', alt: 'Bb'},
  {icon: 'https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80', alt: 'Cc'},
  {icon: 'https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80', alt: 'Dd'},
];

const LazySlider = styled.div`
  height: 50vw;
  background: rgb(131, 168, 52) url("https://keen-slider.io/images/loader.svg") no-repeat center;
  background-size: 100px;
  min-height: auto;

  @media (min-width: 768px) {
    height: 600px;
  }

  img {
    background-color: transparent;
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
  }
`

const Slider = (props) => {
  const [loaded, setLoaded] = React.useState([])
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const [sliderRef] = useKeenSlider({
    afterChange(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    loop: true,
    initial: 1,
  })

  React.useEffect(() => {
    const newLoaded = [...loaded]
    newLoaded[currentSlide] = true
    setLoaded(newLoaded)
  }, [currentSlide, loaded])

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((image, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <LazySlider key={idx} className="keen-slider__slide">
          <img src={loaded[idx] ? image.icon : ''} alt={image.alt}/>
        </LazySlider>
      ))}
    </div>
  )
}

export default Slider;
