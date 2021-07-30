import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
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
    <List>
      <ListElement><Text>hello@email.com</Text></ListElement>
      <ListElement><Text>+46 000 00 00</Text></ListElement>
      <ListElement><Text>instagram</Text></ListElement>
      <ListElement><Text>linkedin</Text></ListElement>
      <ListElement><Text>pinterest</Text></ListElement>
    </List>
  )
}