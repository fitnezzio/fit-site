import React from 'react';

import {Award, BarChart, Cloud, Users} from 'react-feather'
import styled from 'styled-components';

import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import Separator from 'components/Separator';

const FeatBlock = styled.div`
  background: #fff none repeat scroll 0 0;
  padding: 30px 20px;
  margin-bottom: 30px;
  transition: all 0.5s ease-in-out 0s;

  &:hover {
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease-in-out 0s;
  }

  h4 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 0;
  }
`;

const ImgFluid = styled.div`
  margin-bottom: 30px;
`
const syncColor = '#4695FC';
const evaluationColor = '#FFB600';
const studentColor = '#72D328';
const ratingColor = '#FF5028';

const featuresData = [
  {
    id: 1,
    title: 'Sincronizado',
    description: 'Tenha os seus dados atualizados em qualquer dispositivo',
    color: syncColor,
    icon: <Cloud size={60} color={syncColor}/>
  }, {
    id: 2,
    title: 'Avaliações',
    description: 'Faça quantas avaliações quiser e acompanhe sua evolução',
    color: evaluationColor,
    icon: <BarChart size={60} color={evaluationColor}/>
  }, {
    id: 3,
    title: 'Alunos',
    description: 'Cadastre todos os seus alunos e acompanhe cada um',
    color: studentColor,
    icon: <Users size={60} color={studentColor}/>
  }, {
    id: 4,
    title: 'Classificações',
    description: 'Veja a classificação das avaliações em diversos infográficos',
    color: ratingColor,
    icon: <Award size={60} color={ratingColor}/>
  },
];

const Features = ({id}) => (
  <Section id={id} className='text-center'>

    <div className='container'>
      <SectionTitle className='text-center'>
        <h2>Destaques</h2>
        <Separator>Confira a seguir os destaques mais incríveis do Fitnezz.io</Separator>
      </SectionTitle>
    </div>

    <div className="container">
      <div className="rowCustom">

        {featuresData.map(feat => (
          <div key={feat.id} className="col-md-6 col-lg-3">
            <FeatBlock>
              <ImgFluid>
                {feat.icon}
              </ImgFluid>
              <h4 style={{color: feat.color, fontSize: 20}}>{feat.title}</h4>
              <p>{feat.description}</p>
            </FeatBlock>
          </div>
        ))}

      </div>
    </div>
  </Section>
)

export default Features;
