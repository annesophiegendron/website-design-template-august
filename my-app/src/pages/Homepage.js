import React from 'react';
import { OverlayNav } from '../components/OverlayNav'
import styled from 'styled-components';


const Wrapper = styled.div`
  margin: 0;
`
// Section top
const SectionHeader = styled.div`
  float: left;
  display: flex;
  text-align: center;
  padding: 25px 100px;
  text-decoration: none;
  font-size: 3rem;
  background: #0375FF;
  width: 100%;
  justify-content: space-between;
`

const Emoticon = styled.span`
  font-size: 4rem;
`
// Section Header Hero

// Section Intro

// Section products /double column grid



export const Homepage = () => {
  return (
    <Wrapper>
      <SectionHeader>
        <Emoticon>&#9787;</Emoticon>
        <OverlayNav />
      </SectionHeader>

    </Wrapper>


  )
};