import React from 'react';
import styled from 'styled-components';

import {ChevronRight} from 'react-feather'

import screenshot from 'assets/AboutApp/screenshot.png';
import Section from 'components/Section';

const AboutContent = styled.div`
  padding-top: 60px;

  h2 {
    color: #8cb712;
    font-size: 39px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  span {
    color: #6f6e6c;
    font-weight: 700;
  }

  ul li {
    line-height: 36px;
  }

  p {
    font-size: 16px;
    text-align: justify;
    text-justify: inter-word;
  }
`;

const Image = styled.img`
  max-width: 100%;
`;

const featuredPhrases = [
  {id: 1, text: 'Avaliações físicas'},
  {id: 2, text: 'Acompanhamento de medidas'},
  {id: 3, text: 'Acompanhamento de Alunos'},
  {id: 4, text: 'Fácil de usar'}
];

const AboutApp = ({id}) => (
  <Section id={id}>

    <div className='rowCustom justify-content-center'>

      <div className='col-md-5 col-lg-3'>
        <Image src={screenshot} alt='About'/>
      </div>

      <div className='col-md-7 col-lg-5'>
        <AboutContent className='about-content'>

          <h2><span>Fitnezz</span>.io</h2>
          <p>
            Este aplicativo possui uma interface intuitiva com informações e imagens que auxiliam no procedimento de
            medição, bem como poderá registrar, monitorar e compartilhar todos os resultados de sua evolução corporal.
          </p>

          <ul className='list-unstyled'>
            {featuredPhrases.map(featuredPhrase => (
              <li key={featuredPhrase.id} style={{fontWeight: 700}}>
                <ChevronRight size={16}/>{featuredPhrase.text}
              </li>
            ))}
          </ul>

        </AboutContent>
      </div>

    </div>

  </Section>
);

export default AboutApp;
