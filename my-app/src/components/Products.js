import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
`

const Left = styled.div`
  background: red;
  flex-basis: 50%;
`

const Title = styled.h1`
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  margin-left: 20px;
  color: white;
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

export const Products = () => {
  return (
    <div>
      <Container>
        <Left style={{ backgroundColor: "#E8E6DF" }}>
          <Title>Not scrollable content</Title>
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