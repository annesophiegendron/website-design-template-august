import React from 'react';
import styled from 'styled-components';

// components
import { TimeZone } from '../components/TimeZone';

// Header section
const SectionHeader = styled.section`
  // padding: 15vh 0;
  text-align: center;
  background: #0375FF;
  padding: 8vh 0 12vh;
`

const SmallTitle = styled.h1`
  font-size: 3.2vw;
  text-transform: uppercase;
  margin:0;
  padding:0;
  animation: slide-up 0.5s linear;

  @keyframes slide-up {
    from {
      transform: translateY(50px);
      z-index: -2;
      color: #0375FF;
    }
    to {
      transform: translateY(0);
      z-index: 1;
    }
  }
`

const BigTitle = styled.h2`
  font-size: 17vw;
  text-transform: uppercase;
  letter-spacing: 15px;
  margin:0;
  padding:0;
  overflow: hidden;
`

// Time section
const SectionTime = styled.section`
  background: #0375FF;
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