import React from 'react';

import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import Separator from 'components/Separator';
import Slider from 'components/Slider';
import Title from 'components/Title';

const Gallery = ({id}) => (
  <Section id={id} className='text-center'>

    <div className="container">
      <SectionTitle className='text-center'>
        <Title>Galeria do Fitnezz.io</Title>
        <Separator>Veja como é o Fitnezz.io</Separator>
      </SectionTitle>
    </div>

    <div className="container">
      <Slider/>
    </div>

  </Section>
)

export default Gallery;
