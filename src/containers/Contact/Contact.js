import React, {useState} from 'react';

import styled from 'styled-components';

import {Facebook, GitHub, Instagram, Mail, MapPin, Play} from 'react-feather';

import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import Separator from 'components/Separator';
import Button from 'components/Button';
import Title from 'components/Title';

const Info = styled.div`
  color: #222;

  i {
    font-size: 32px;
    color: #8CB712;
    float: left;
  }

  p {
    padding: 0 0 10px 50px;
    margin-bottom: 20px;
    line-height: 22px;
    font-size: 14px;
  }

`;

const SocialLinks = styled.div`
  padding-bottom: 20px;

  a {
    font-size: 18px;
    display: inline-block;
    background: #8CB712;
    color: #fff;
    line-height: 1;
    padding: 6px 0 8px 0;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
    margin-right: 10px;
  }

  a:hover {
    background: #6a8918;
    color: #fff;
  }
`;

const SendMessage = styled.div`
  color: #08E083;
  border: 1px solid #04A17C;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const ErrorMessage = styled.div`
  color: #FF4E3A;
  border: 1px solid #B71D26;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Contact = ({id}) => {

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    if (email === '' || subject === '' || message === '') {
      setError(true);
      setSuccess(false);
      e.preventDefault();
    } else {
      setError(false);
      setSuccess(true);

      window.open(`mailto:io.fitnezz@gmail.com?subject=${subject}&body=${message}`, '_blank');
    }
  };

  return (
    <Section id={id} className='text-center'>

      <div className="container">
        <SectionTitle className="text-center">
          <Title>Contato</Title>
          <Separator>
            Caso tenha alguma sugestão, entre em contato conosco pelos canais oficiais
          </Separator>
        </SectionTitle>
      </div>

      <div className="container">
        <div className="rowCustom justify-content-center">

          <div className="col-lg-3 col-md-4">

            <Info>
              <div>
                <MapPin size={32} color='#8CB712' style={{display: 'inline-block', float: 'left'}}/>
                <p>Florianópolis, SC</p>
              </div>

              <div className="email">
                <Mail size={32} color='#8CB712' style={{display: 'inline-block', float: 'left'}}/>
                <p>io.fitnezz@gmail.com</p>
              </div>

            </Info>

            <SocialLinks>
              <a href="https://www.facebook.com/fitnezzio" target='_blank' rel='noreferrer'
                 name='Pagina no Facebook'>
                <Facebook/>
              </a>
              <a href="https://www.instagram.com/fitnezz.io" target='_blank' rel='noreferrer'
                 name='Pagina no Instagram'>
                <Instagram/>
              </a>
              <a href="https://play.google.com/store/apps/details?id=br.com.ava" target='_blank' rel='noreferrer'
                 name='Pagina na Google Play'>
                <Play/>
              </a>
              <a href="https://github.com/fitnezzio" target='_blank' rel='noreferrer'
                 name='Pagina no Github'>
                <GitHub/>
              </a>
            </SocialLinks>

          </div>

          <div className="col-lg-5 col-md-8">
            <div className="form">
              {success && <SendMessage>Sua mensagem foi enviada com sucesso. Obrigado!</SendMessage>}
              {error && <ErrorMessage>Por favor, preencha os campos</ErrorMessage>}
              <div>
                <div className="form-group">
                  <input name="email" placeholder="Seu email"
                         value={email} onChange={event => setEmail(event.target.value)}
                         type="email" className="form-control"/>
                </div>
                <div className="form-group">
                  <input name="subject" placeholder="Assunto"
                         value={subject} onChange={event => setSubject(event.target.value)}
                         type="text" className="form-control"/>
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Mensagem"
                            value={message} onChange={event => setMessage(event.target.value)}
                            rows="5" className="form-control"/>
                </div>
                <div className="text-center">
                  <Button onClick={sendEmail}>Enviar mensagem</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Section>
  )
}

export default Contact;
