import React from 'react';
import styled from 'styled-components';

import screenshot from 'assets/AboutApp/screenshot.png';
import Section from 'components/Section';

const AboutContent = styled.div`
  padding-top: 60px;

  h2 {
    color: #252525;
    font-size: 39px;
    font-weight: 100;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  span {
    font-weight: 700;
  }

  ul li {
    line-height: 36px;
  }

  ul li .fa {
    padding-right: 20px;
  }
`;

const Image = styled.img`
  max-width: 100%;
`;

const AboutApp = ({id}) => (
  <Section id={id}>
    <div className='rowCustom'>

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
              <li><i className='fa fa-angle-right'/>Avaliações físicas</li>
              <li><i className='fa fa-angle-right'/>Acompanhamento de medidas</li>
              <li><i className='fa fa-angle-right'/>Acompanhamento de Alunos</li>
              <li><i className='fa fa-angle-right'/>Fácil de usar</li>
            </ul>

          </AboutContent>
        </div>

      </div>

    </div>
  </Section>
);

export default AboutApp;
