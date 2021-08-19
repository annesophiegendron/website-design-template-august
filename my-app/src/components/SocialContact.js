import React from 'react';
import styled from 'styled-components';

import '../styles/socialComponent.css';

const Container = styled.ul`
margin: 0;
padding: 0;
`

const ListElement = styled.li`
  pointer: cursor;
  cursor: pointer;
  border-top: solid black 5px;
  padding-top: 3%;
  padding-bottom: 3%;

  @media (min-width: 992px) {
    padding-top: 1%;
    padding-bottom: 1%;
   }
`

const Text = styled.a`
  padding: 0;
  margin: 0;
  padding-left: 5%;
  font-size: 5vh;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 500;

  @media (min-width: 992px) {
    font-size: 11vh;
    }
`

export const SocialContact = () => {

  return (
    <Container>
      <ListElement>
        <Text className="container">
          <div className="element text">
            <span>+46 (0)72 000 00 00</span>
            <p>+46 (0)72 000 00 00</p>
          </div>
        </Text>
      </ListElement>

      <ListElement>
        <Text className="container">
          <div className="element text">
            <span>hello@hello.com</span>
            <p>hello@hello.com</p>
          </div>
        </Text>
      </ListElement>

      <ListElement>
        <Text className="container">
          <div className="element text">
            <span>instagram</span>
            <p>instagram</p>
          </div>
        </Text>
      </ListElement>

      <ListElement>
        <Text className="container">
          <div className="element text">
            <span>pinterest</span>
            <p>pinterest</p>
          </div>
        </Text>
      </ListElement>


      <ListElement>
        <Text className="container">
          <div className="element text">
            <span>linkedin</span>
            <p>linkedin</p>
          </div>
        </Text>
      </ListElement>

    </Container>
  )
}