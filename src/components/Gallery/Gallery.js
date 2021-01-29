import React from 'react';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import Separator from 'components/Separator';
import Slider from 'components/Slider';


const Gallery = () => (
  <Section className='text-center'>

    <div className="container">
      <SectionTitle className='text-center'>
        <h2>Galeria do Fitnezz.io</h2>
        <Separator>Veja como é o Fitnezz.io</Separator>
      </SectionTitle>
    </div>

    <div className="container">
      <Slider/>
    </div>

  </Section>
)

export default Gallery;
