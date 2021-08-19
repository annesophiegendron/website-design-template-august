import React from 'react';
import styled from 'styled-components';

const GridElement = styled.div`
  height: 100vh;
  width: 50%;
  text-align: center;
  cursor: pointer;
  background-size: cover;
  transition: transform .5s, filter 0.5s ease-in-out;
  filter: grayscale(25%);

  &:hover {
    opacity: 1;
    filter: grayscale(0);
 `

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.6); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: .2s ease;
  opacity:0;
  color: white;
  font-size: 20px;
  height: 100vh;
  text-align: center;

  &:hover {
  opacity: 1;
  }
`

const Title = styled.h1`
  width: 70%;
  bottom: 0;
  margin-left: 60px;
  color: white;
  display: block;
  font-size: 3.5rem;
  position: absolute;
  text-align: left;
  text-transform: capitalize;
`

const SubTitle = styled.h2`
  width: 70%;
  top: 0;
  margin-top: 50px;
  margin-left: 60px;
  color: white;
  display: block;
  font-size: 0.95rem;
  text-align: left;
  text-transform: uppercase;
  font-weight: 460;
  letter-spacing: 1px;

`

export const GridImages = (props) => {
  return (
    <GridElement
    style={{ backgroundImage: `url('${props.image}')` }}
  >
      <Overlay>
        <Title>{props.title}</Title>
        <SubTitle>{props.subtitle}</SubTitle>
       </Overlay>
    </GridElement>
      )
}