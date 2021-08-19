import React from 'react';
import styled from 'styled-components';

const SectionIntro = styled.section`
  display: block;
  margin-top: auto;

  @media (min-width: 992px) {
    padding-top: 5%;
    padding-bottom: 5%;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    &:before {
      content: "";
      grid-row: 1/2;
      grid-column: 3/3;
    }
  }
}
`

const IntroTitleLeft = styled.h3`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-size: 48px;
  font-weight: 500;
  letter-spacing: 2px;
  height: 300px;
  padding-left: 5%;
  padding-right: 10%;

  @media (min-width: 992px) {
    margin: inherit;
    padding-left: 10%;
  }
`

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  transform: translateY(-70px);

  @media (min-width: 992px) {
    transform: inherit;
    margin-right: 10%;
  }
`

const IntroTextRight = styled.p`
  grid-row: 2 span;
  padding: 5%;
  text-align: left;
  letter-spacing: 1px;
  line-height: 30px;
  font-size: 20px;
  margin-top: auto;
  font-weight: 300;

  @media (min-width: 992px) {
    font-size: 17px;
    line-height: 25px;
    padding-left: 10%;
    padding-top: 10%;
  }
 `

const IntroTextLink = styled.p`
  display: flex;
  padding-left: 5%;
  padding-top: 8%;
  letter-spacing: 2px;
  transform: translateY(-60px);
  font-size: 15px;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 992px) {
    padding-left: 10%;
    font-size: 12px;
    padding-top: 6%;
  }
`

export const Article = (props) => {
  return (
    <SectionIntro>
      <IntroTitleLeft>{props.leftTitle}</IntroTitleLeft>
      <TextWrap>
        <IntroTextRight>{props.text}</IntroTextRight>
        <IntroTextLink><a style={{ paddingLeft: "25px", marginTop: "-5px"}} href={props.link} rel="noreferrer" target="_blank">{props.linkText}</a></IntroTextLink>
      </TextWrap>
    </SectionIntro>
  )
};