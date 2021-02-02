import styled from 'styled-components';

const Button = styled.a`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 11px 36px;
  border-radius: 6px;
  transition: 0.5s;
  margin-bottom: 30px;
  border: 2px solid #8CB712;
  background: #fff;
  color: #8CB712 !important;
  text-decoration: none;

  &:hover {
    background: #8CB712;
    color: #fff !important;
  }
`;

export default Button;
