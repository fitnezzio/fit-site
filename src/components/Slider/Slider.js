import React from 'react';
import {useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styled from 'styled-components';

const images = [
  {icon: 'https://play-lh.googleusercontent.com/h-hOX1TFG8qG2tvuj1BauUMtE6Dslx4f7QkNXPc1DkiGzr6nGVuZaBM20lRcWQw9mtI', alt: 'Aa'},
  {icon: 'https://play-lh.googleusercontent.com/S4qW85mt3Hq02FOC00DtBCKzGBkfNnygIUbxJev8eoqQd5qsKq4384ic-OtNLJjVhsE', alt: 'Bb'},
  {icon: 'https://play-lh.googleusercontent.com/XNUIZiO9cjDyCMdxt-4PsL8iCT8Sg1R2fQtbbor42d1bb-stG20zqWR7ola1pOSUb_o', alt: 'Cc'},
  {icon: 'https://play-lh.googleusercontent.com/9evpXBlV390C6qWPIXSiGJjezJeOus8KygXTLnSwtnc4yvEzipD2sGEdwAlBJlQs1A', alt: 'Dd'},
  {icon: 'https://play-lh.googleusercontent.com/gI-Jw4nlaFKi_s8smxjignEkzh6gVP0PwGE5VNFZvbafoSeoFvA7qcyJklVyuChZ8vMR', alt: 'Ee'},
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
  }, [currentSlide])

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
