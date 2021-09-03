import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { bigTitles, colours, brandName } from '../assets/data/constants';
import items from '../assets/data/Items';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (min-width: 992px) {
    display: flex;
    width: 100%;
    flex-direction: row;
   }
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
  font-size: 1.5rem;
  position: absolute;

  @media (min-width: 992px) {
    font-size: 3.5rem;
   }
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
  font-size: 8px;
  position: absolute;

  @media (min-width: 992px) {
    font-size: 13px;
   }
`

const Right = styled.div`
    flex-basis: 50%;
    position: relative;
    overflow: scroll;
`

const Image = styled.section`
  height: 110vh;
  position: relative;
  background-size: cover;
`

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);

export const Products = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray("section");
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        scrub: true,
        ease: "power1.out",
        trigger: section,
        start: "top 50%",
        end: "+=100%",
        id: "killIt",
        onToggle: self => {
          if (self.isActive) { // anime seulement si section active (onMouseEnter & onMouseBack)
            gsap.to(".left-side", { backgroundColor: colours[i], overwrite: true });
            document.getElementById("brand").innerHTML = brandName[i];
            document.getElementById("titre").innerHTML = bigTitles[i];
          }
        },
      })
    });

    return () => {
      // Cleanup scroll listeners
      ScrollTrigger.getAll("killIt").forEach(st => st.kill())
      console.log(ScrollTrigger.getAll())
    }

  }, []);

  return (
    <>
      <Container className="wrapper">

        <Left className="left-side" ref={ref}>
          <Section>
            <SubTitle id="brand"></SubTitle>
            <Title id="titre"></Title>
            <IntroTextLink><a style={{ textDecoration: "none", color: "black", cursor: "pointer", paddingLeft: "25px", padding: "5px" }} href="https://media.giphy.com/media/3oz8xZvvOZRmKay4xy/giphy.gif">See all cases ->{props.linkText}</a></IntroTextLink>
          </Section>
        </Left>

        <Right>
          {items.map((item, i) => (
            <Image key={i} className="text" style={{ backgroundImage: `url('${item.image}')` }}></Image>
          ))}
        </Right>

      </Container>
    </>
  )
};