import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Container = styled.section`
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
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
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

const Image = styled.div`
  position: relative;
  height: 100vh;
`

const Section = styled.section`
width: 100%;

height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`

export const Products = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sections = document.querySelectorAll(".color-section");
    const initBgColor = document.body.dataset.initBgColor;

    sections.forEach((section, i) => {
      const prevColor = i === 0 ? initBgColor : sections[i - 1].dataset.bgColor;

      ScrollTrigger.create({
        trigger: section,
        start: "top center+=20%",
        onEnter: () =>

          gsap.to(".container", {
            backgroundColor: section.dataset.bgColor,
            duration: 0.8,
            overwrite: "auto"
          }),
        onLeaveBack: () =>
          gsap.to(".container", {
            backgroundColor: prevColor,
            duration: 0.8,
            overwrite: "auto"
          })
      });
    });
  })

  return (
    <div>
      <Container>

        <Left className="container" ref={ref}>
          <Section className="color-section" data-bg-color="#E8E6DF" >
          </Section>
          <Section className="color-section" data-bg-color="#CCE8F5">
          </Section>
          <Section className="color-section" data-bg-color="#DEDCC2">
          </Section>
          <Section className="color-section" data-bg-color="#FFC2D2">
          </Section>
          <Section className="color-section" data-bg-color="#BCC4A1">
          </Section>
          <Section className="color-section" data-bg-color="#355253">
          </Section>
          <Section className="color-section" data-bg-color="#E8E8E8">
          </Section>
        </Left>

        <Right>
          <Image style={{ backgroundImage: "url(https://everland.dk/wp-content/uploads/2021/03/TuborgSquash_02-1440x1024.jpg)", backgroundSize: "cover" }}></Image>
          <Image style={{ backgroundImage: "url(https://everland.dk/wp-content/uploads/2021/04/Danone-Fjord-Brand-Design-Case-7-1-2400x1351.jpg)", backgroundSize: "cover" }}></Image>
          <Image style={{ backgroundImage: "url(https://everland.dk/wp-content/uploads/2021/02/Naturfrisk_Brus_08-1440x810.jpg)", backgroundSize: "cover" }}></Image>
          <Image style={{ backgroundImage: "url(https://everland.dk/wp-content/uploads/2021/03/everland_rema1000_hygiejne_021-1.jpg)", backgroundSize: "cover" }}></Image>
          <Image style={{ backgroundImage: "url(https://everland.dk/wp-content/uploads/2021/02/Carlsberg-case-hop-logo.jpg)", backgroundSize: "cover" }}></Image>
          <Image style={{ backgroundImage: "url(https://images.unsplash.com/photo-1609047286215-7dbe2ae99109?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2933&q=80)", backgroundSize: "cover" }}></Image>
          <Image style={{ backgroundImage: "url(https://everland.dk/wp-content/uploads/2021/03/Laesk_Can_06-2400x1350.jpg)", backgroundSize: "cover" }}></Image>
          <Image style={{ backgroundImage: "url(https://everland.dk/wp-content/uploads/2021/03/1Artboard10copy2-1800x1012.jpg)", backgroundSize: "cover" }}></Image>
        </Right>

      </Container>
    </div>
  )
}