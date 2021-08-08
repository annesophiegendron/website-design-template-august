import React from 'react';
import styled from 'styled-components';

// components
import { TimeZone } from '../components/TimeZone';

// Header section
const SectionHeader = styled.section`
  text-align: center;
  background: #F2C9CC;
  padding: 21vh 0 15vh;
`

const SmallTitle = styled.h1`
  font-size: 3.2vw;
  font-weight: 700;
  text-transform: uppercase;
  margin:0;
  padding:0;
  animation: slide-up 0.5s linear;

  @keyframes slide-up {
    from {
      transform: translateY(50px);
      z-index: -2;
      color: #F2C9CC;
    }
    to {
      transform: translateY(0);
      z-index: 1;
    }
  }
`

const BigTitle = styled.h2`
  font-size: 15vw;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 15px;
  margin:0;
  padding:0;
  overflow: hidden;
`

// Time section
const SectionTime = styled.section`
  background: #F2C9CC;
  padding: 3vh 0;
`

export const Header = () => {
  return (
    <div>
      <SectionHeader>
        <SmallTitle>viverra nam</SmallTitle>
        <BigTitle>urnamole</BigTitle>
      </SectionHeader>
      <SectionTime>
        <TimeZone />
      </SectionTime>
    </div>
  )
};