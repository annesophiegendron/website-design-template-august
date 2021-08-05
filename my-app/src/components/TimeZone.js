import React from 'react';

// librairies
import styled from 'styled-components';
import Clock from 'react-live-clock';
import 'moment-timezone';

const Container = styled.div`
  text-align: center;
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`

const ListWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  display: flex;
`

const ListElement = styled.li`
  display: inline;
  width: 100px;
  height: 30px;
  margin: auto;
  text-align: center;
  flex: auto;
  padding: 5px;
`

const CityName = styled.span`
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 0.95rem;
`

export const TimeZone = () => {
  return (
    <Container>
      <ListWrapper>
        <ListElement>
          <CityName>London {' '}</CityName>
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/London'} />
        </ListElement>
        <ListElement>
          <CityName>New York {' '}</CityName>
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'America/New_York'} />
        </ListElement>
        <ListElement>
          <CityName>Tokyo {' '}</CityName>
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Tokyo'} />
        </ListElement>
        <ListElement>
          <CityName>Shanghaï {' '}</CityName>
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Shanghai'} />
        </ListElement>
        <ListElement>
          <CityName>Everland {' '}</CityName>
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Paris'} />
        </ListElement>
      </ListWrapper>
    </Container>
  )
};