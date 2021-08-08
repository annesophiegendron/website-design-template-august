import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// libraries
import styled from "styled-components"

const Overlay = styled.div`
  height: 100%;
  width: ${(props) => props.width || 0};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #D0D3D9;
  overflow-y: hidden;
`

const OverlayContent = styled.div`
  width: 100%;
  display: flex;
  font-weight: bold;
  letter-spacing: 1px;
  justify-content: center;
  font-size: 5rem;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @media (min-width: 992px) {
    font-size: 7.5rem;
   }
`

const LinkWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 8px;
  font-family: "Montserrat", sans-serif;
  color: #0D0D0D;
  cursor: pointer;
  display: block;
  transition: 0.4s;
  text-transform: capitalize;
  letter-spacing: 2px;
  &:hover{
    text-decoration: underline;
  }
  @media screen and (max-height: 450px) {
  font-size: 20px
}
`

const CloseButton = styled.a`
  position: absolute;
  right: 5%;
  top: 25px;
  font-size: 60px;
  text-decoration: none;
  color: #0D0D0D;
  cursor: pointer;
`

const HamburgerMenu = styled.span`
  font-size: 8vh;
  cursor: pointer;
  color: #0D0D0D;
  right: 5%;
  position: fixed;
  z-index: 1;
`

const Emoticon = styled.span`
  position: absolute;
  font-size: 10vh;
  cursor: pointer;
  color: #0D0D0D;
  left: 5%;
  top: 20px;
`

export const OverlayNav = () => {
  const [showMenu, setMenu] = useState(false, true)

  return (
    <>
      {!showMenu && (
        <HamburgerMenu onClick={() => setMenu(true)}>&#9776;</HamburgerMenu>
      )}

      {showMenu && (
        <Overlay width="100%">
          <StyledLink to="/" exact style={{ textDecoration: 'none' }}>
            <Emoticon onClick={() => setMenu(false)}>&#9787;</Emoticon>
          </StyledLink>
          <CloseButton onClick={() => setMenu(false)}>&#8855;</CloseButton>
          <OverlayContent>
            <LinkWrapper>
              <StyledLink to="/work" exact onClick={() => setMenu(false)}>work,</StyledLink>
              <StyledLink to="/about" exact onClick={() => setMenu(false)}>about,</StyledLink>
              <StyledLink to="/team" exact onClick={() => setMenu(false)}>team,</StyledLink>
              <StyledLink to="/contact" exact onClick={() => setMenu(false)}>contact,</StyledLink>
              <StyledLink style={{ textDecoration: 'none', cursor: 'default' }}>shop,</StyledLink>
              <StyledLink to="/news" exact onClick={() => setMenu(false)}>news</StyledLink>
            </LinkWrapper>

          </OverlayContent>
        </Overlay>
      )}
    </>
  )
};