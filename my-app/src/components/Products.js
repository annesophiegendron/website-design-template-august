import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { bigTitles, colours, brandName, elementImages } from '../assets/data/constants';

// assets
import { ArrowSvg } from '../assets/svg/arrow_svg';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
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

const IntroTextLink = styled.p`
  margin-left: 60px;
  color: black;
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 13px;
  position: absolute;
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

export const Products = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray("section");
    let tl = gsap.timeline();

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        scrub: true,
        ease: "power1.out",
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
            <SubTitle id="brand"></SubTitle>
            <Title id="titre"></Title>
            <IntroTextLink>See all cases ->{props.linkText}<a style={{ paddingLeft: "25px", padding: "5px" }} href="https://media.giphy.com/media/3oz8xZvvOZRmKay4xy/giphy.gif"></a></IntroTextLink>
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

