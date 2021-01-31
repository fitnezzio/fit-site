import React from 'react';
import styled from 'styled-components';

import logo from 'assets/logo.svg'

const PullLeft = styled.div`
  float: left;
  padding: 6px 0 0 0;

  h1 {
    color: #6F636C;
    font-family: "Philosopher", sans-serif;
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 0;
  }

  h1 a {
    color: #8CB712;
    line-height: 1;
    display: inline-block;
    text-decoration: none;
  }

  h1 a span {
    color: #6F636C;
  }

  img {
    padding: 0;
    margin: 0;
  }
`;

const HeaderStyled = styled.header`
  background: #eee;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 48px;
  z-index: 3;
  transition: all 0.5s ease;
  box-shadow: 0 8px 6px -6px #b4b3b3;
`

const Header = () => (
  <HeaderStyled>
    <div className="container">
      {/* eslint-disable jsx-a11y/anchor-is-valid */}

      <PullLeft id="logo">
        <a href="#about-app"><img src={logo} alt='Logo' height={30}/></a>
      </PullLeft>

    </div>
  </HeaderStyled>
);

export default Header;
