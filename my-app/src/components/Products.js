import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { bigTitles, colours, brandName, elementImages } from '../assets/data/constants';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
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
  position: -webkit-sticky;
  position: sticky;
  bottom: 20%;
  margin-left: 60px;
  color: black;
  min-height: 10vh;
  display: block;
  font-size: 3rem;
`

const SubTitle = styled.h2`
  // position: -webkit-sticky;
  // position: sticky;
  padding-top: 5%;
  margin-left: 60px;
  color: black;
  min-height: 100vh;
  display: block;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
`

const Right = styled.div`
  flex-basis: 50%;
  position: relative;
  overflow: scroll;
`

const Image = styled.section`
  position: relative;
  height: 100vh;
`

const Section = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  color: black;
  min-height: 100vh;
  display: block;
`

export const Products = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray("section");

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        markers: true,
        scrub: true,
        ease: "power2",
        trigger: section,
        start: "top 50%",
        end: "+=100%",
        onToggle: self => {
          if (self.isActive) { // anime seulement si section active (onMouseEnter & onMouseBack)
            gsap.to(".left-side",
              { backgroundColor: colours[i], overwrite: true });
            document.getElementById("brand").innerHTML = brandName[i];
            document.getElementById("titre").innerHTML = bigTitles[i];
          }
        }
      })
    });
  }, []);

  return (
    <>
      <Container className="wrapper">

        <Left className="left-side" ref={ref}>
          <Section className="content-wrap">
            <SubTitle id="brand">Toborg</SubTitle>
            <Title id="titre"></Title>
          </Section>
        </Left>

        <Right>
          {elementImages.map((elementImage, i) => (
            <Image key={i} className="text" style={{ backgroundImage: `url('${elementImage}')`, backgroundSize: "cover" }}></Image>
          ))}
        </Right>

      </Container>
    </>
  )
};

