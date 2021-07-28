import React from 'react';
import styled from 'styled-components';

const Hamburger = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 6vh;
  cursor: pointer;
  color: #0D0D0D;
  padding: 25px 100px;
  font-size: 60px;
`

export const OverlayNav = () => {
  return (
  <Hamburger>&#9776;</Hamburger>
)
}