import React from 'react';

// librairies
import styled from 'styled-components';
import Clock from 'react-live-clock';
import Moment from 'react-moment';
import 'moment-timezone';

const Container = styled.div`
  text-align: center;
`

const ListWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: space-around;
`

const ListElement = styled.li`
  display: inline;
`

export const TimeZone = () => {
  return (
    <Container>
      <ListWrapper>
        <ListElement>London {' '}
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/London'} />
        </ListElement>
        <ListElement>New York {' '}
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'America/New_York'} />
        </ListElement>
        <ListElement>Tokyo {' '}
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Tokyo'} />
        </ListElement>
        <ListElement>Shanghaï {' '}
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Shanghai'} />
        </ListElement>
        <ListElement>Everland {' '}
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Paris'} />
        </ListElement>
      </ListWrapper>
    </Container>
  )
}