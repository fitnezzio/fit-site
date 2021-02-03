import React from 'react';
import styled from 'styled-components';

import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import Separator from 'components/Separator';
import Title from 'components/Title';

import JoaoGabriel from 'assets/Team/JoaoGabriel.jpeg';
import GabrielDeCarvalho from 'assets/Team/GabrielDeCarvalho.jpeg';
import GabrielaSantiago from 'assets/Team/GabrielaSantiago.jpeg';
import EnzoGabriel from 'assets/Team/EnzoGabriel.jpeg';

const TeamContent = styled.div`
  background: #fff none repeat scroll 0 0;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.19);
  bottom: 0;
  padding: 20px 0;
  position: absolute;
  width: 100%;
  border-radius: 8px 8px 0 0;

  span {
    color: #8cb712;
    font-weight: 500;
  }

  h5 {
    color:  #6f6e6c;
    font-weight: 600;
  }
`;

const TeamBlock = styled.div`
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
  height: 340px;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  width: 100%;

  @media (max-width: 991px) {
    margin-bottom: 30px;
  }

  @media (max-width: 1199px) and (min-width: 992px) {
    height: 292px;
  }

  @media (max-width: 991px) and (min-width: 768px) {
    height: 400px;
  }

  @media (max-width: 767px) and (min-width: 568px) {
    height: 540px;
  }

  @media (max-width: 567px) {
    height: 476px;
  }

  img {
    width: 100%;
  }
`;

const Photo = styled.img`
  width: 100%;
`;

const members = [
  {id: 1, name: 'João Gabriel', role: 'CEO', photo: JoaoGabriel},
  {id: 2, name: 'Gabriel de Carvalho', role: 'Software Engineer', photo: GabrielDeCarvalho},
  {id: 3, name: 'Gabriela Santiago', role: 'UI/UX Designer', photo: GabrielaSantiago},
  {id: 4, name: 'Enzo Gabriel', role: 'Mobile Developer', photo: EnzoGabriel}
]

const Team = ({id}) => (
  <Section id={id} className='text-center'>

    <div className='container'>
      <SectionTitle className='text-center'>
        <Title>Time</Title>
        <Separator>Conheça os membros do time Fitnezz.io</Separator>
      </SectionTitle>
    </div>

    <div className='container'>
      <div className='rowCustom'>

        {members.map(member => (
          <div key={member.id} className='col-md-6 col-md-4 col-lg-3'>
            <TeamBlock>
              <Photo src={member.photo} className='img-responsive' alt={`${member.name} photo's`}/>
              <TeamContent>
                <span>{member.role}</span>
                <h5>{member.name}</h5>
              </TeamContent>
            </TeamBlock>
          </div>
        ))}

      </div>
    </div>

  </Section>
)

export default Team;
