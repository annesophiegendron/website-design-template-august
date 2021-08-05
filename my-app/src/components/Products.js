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

const Title = styled.span`
  position: -webkit-sticky;
  position: sticky;
  top: 5px;
  margin-left: 20px;
  color: black;
  min-height: 100vh;
  display: block;
`

const SubTitle = styled.span`
  position: -webkit-sticky;
  position: sticky;
  top: 25px;
  margin-left: 20px;
  color: black;
  min-height: 100vh;
  display: block;
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
  display: flex;
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
            console.log(document.getElementById("titre").innerHTML = bigTitles[i]);
            document.getElementById("brand").innerHTML = brandName[i];
          }
        }

      })
    });
  }, []);

  return (
    <>
      <Container  className="wrapper">

          <Left className="left-side" ref={ref}>
            <Section className="content-wrap">
            <Title id="titre"></Title>
            <SubTitle id="brand"></SubTitle>
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

