import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const Emoticon = styled.span`
  position: relative;
  font-size: 10vh;
  color: #0D0D0D;
  left: 100%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  left: 5%;
  padding-top: 2%;
  font-family: "Montserrat", sans-serif;
  color: #0D0D0D;
  cursor: pointer;
  display: block;
  transition: 0.4s;
  text-transform: capitalize;
  letter-spacing: 2px;
  z-index: 1;
  &:hover{
    text-decoration: underline;
  }
  @media screen and (max-height: 450px) {
  font-size: 20px
}
`

export const HomeEmoticon = () => {
  return (
    <StyledLink to="/" style={{ textDecoration: 'none' }}>
      <Emoticon>&#9787;</Emoticon>
    </StyledLink>
  )
}