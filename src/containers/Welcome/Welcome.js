import React from 'react';

import styled from 'styled-components';
import {Facebook, GitHub, Instagram, Play, ShoppingBag} from 'react-feather';

import Section from 'components/Section';
import Button from 'components/Button';

import Logo from 'assets/Welcome/logo_sem_nome.png'


const Base = styled.div`
  width: 100%;
  height: calc(80vh);
  background: center bottom no-repeat;
  background-size: 100%;
  position: relative;
  margin-top: 40px;

  @media (min-width: 1025px) {
    background-attachment: fixed;
  }
`;

const Container = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0 0 10px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #8CB712;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const Image = styled.img`
  max-width: 95%;
  margin-bottom: 30px;
`;

const Link = styled.a`
  color: #6F6E6C;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 4px 20px;
  text-decoration: none;
  transition: 0.3s;

  @media (max-width: 575px) {
    margin: 4px 8px;
  }

  &:hover {
    color: #8CB712;
  }
`;

const Welcome = ({id}) => (
  <Section id={id}>
    <Base>
      <Container>
        <Title>Bem vindo(a) ao Fitnezz.io</Title>
        <Image src={Logo} alt='Logo'/>
        <Button href="#about-app">Sobre o app</Button>
        <div>
          <Link href="https://play.google.com/store/apps/details?id=br.com.ava" target='_blank'><Play/> Google Play</Link>
          <Link href="#"><ShoppingBag/> App Store (em breve)</Link>
          <Link href="https://github.com/fitnezzio" target='_blank'><GitHub/> Github</Link>
        </div>
        <div style={{paddingTop: 10}}>
          <Link href="https://www.facebook.com/fitnezzio/" target='_blank'><Facebook/> Facebook</Link>
          <Link href="https://www.instagram.com/fitnezz.io/" target='_blank'><Instagram/> Instagram</Link>
        </div>

      </Container>
    </Base>
  </Section>
);

export default Welcome;
