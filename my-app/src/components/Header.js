import React from 'react';
import styled from 'styled-components';

// components
import { TimeZone } from '../components/TimeZone';

// Header section
const SectionHeader = styled.section`
  padding: 15vh 0;
  text-align: center;
  background: orange;
`

const SmallTitle = styled.h1`
  font-size: 3vw;
  text-transform: uppercase;
  margin:0;
  padding:0;
`

const BigTitle = styled.h2`
  font-size: 14vw;
  text-transform: uppercase;
  letter-spacing: 15px;
  margin:0;
  padding:0;
`

// Time section
const SectionTime = styled.section`
  background: yellow;
  padding: 3vh 0;

`

export const Header = () => {
  return (
    <div>
      <SectionHeader>
        <SmallTitle>welcome to</SmallTitle>
        <BigTitle>everland</BigTitle>
      </SectionHeader>
      <SectionTime>
        <TimeZone />
      </SectionTime>
    </div>
  )
}