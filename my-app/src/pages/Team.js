import React from 'react';
import styled from 'styled-components';

import { Footer } from "../components/Footer";
import { SocialContact } from "../components/SocialContact";
import { HomeEmoticon } from '../components/HomeEmoticon';
import { OverlayNav } from '../components/OverlayNav';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
`

//TOP SECTION
const SectionHeader = styled.div`
height: 100px;
display: flex;
justify-content: end;
width: 100vw;
position: absolute;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  top: 20%;
`

const Section = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  color: black;
  display: block;
  margin-bottom: 10%;
`

const Left = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  min-height: 100vh;
  width: 100%;
  color: white;
  flex-direction: column;
`

const Title = styled.h1`
  width: 70%;
  bottom: 0;
  margin-left: 60px;
  color: black;
  display: block;
  font-size: 3.5rem;
  position: absolute;
`

const SubTitle = styled.h2`
  margin-left: 60px;
  color: black;
  display: block;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 400px;
  margin-top: 50px;
`

const Right = styled.div`
  flex-basis: 50%;
  position: relative;
  overflow: scroll;
`

const Image = styled.section`
  position: relative;
  height: 110vh;
`

export const Team = () => {
  return (
    <Wrapper>
      <SectionHeader>
        <HomeEmoticon />
        <OverlayNav />
      </SectionHeader>
      <Container>
        <Left>
          <Section>
            <SubTitle>ernest</SubTitle>
            <Title>mattis molestie a iaculis at erat</Title>
          </Section>
        </Left>
        <Right>
          <Image style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618695380670-3aad4b7eecc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1348&q=80')`, backgroundSize: "cover" }}></Image>
        </Right>
      </Container>
      <SocialContact />
      <Footer />
    </Wrapper>
  )
};