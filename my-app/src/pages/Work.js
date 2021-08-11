import React from 'react';
import styled from 'styled-components';

// components
import { Article } from '../components/Article';
import { OverlayNav } from '../components/OverlayNav';
import { Footer } from '../components/Footer';
import { SocialContact } from '../components/SocialContact';
import { HomeEmoticon } from '../components/HomeEmoticon';
import { GridImages } from '../components/Grid';

import items from '../assets/data/Items';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
`

// Section top
const SectionHeader = styled.div`
  height: 100px;
  justify-content: space-between;
  padding: 20px;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  &:hover {
    opacity: 1;
  }
`

export const Work = () => {
  return (
    <>
      <Wrapper>

        <SectionHeader style={{ position: 'absolute' }}>
          <HomeEmoticon style={{ left: '100px' }} />
          <OverlayNav />
        </SectionHeader>

        <Image src="https://images.unsplash.com/photo-1544702514-d01427b9aa8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=826&q=80" alt="header image">
        </Image>

        <Article
          leftTitle="aenean. pharetra magna. ac placerat."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero enim sed faucibus turpis in. Mi tempus imperdiet nulla malesuada pellentesque. Ut venenatis tellus in metus vulputate eu. Id diam vel quam elementum pulvinar etiam. Eget nunc lobortis mattis aliquam faucibus purus in. "
          linkText="est lorem ipsum dolor sit amet"
        />

        <Grid>
          {items.map((item, i) => (
            <GridImages
              title={item.title}
              subtitle={item.brandName}
              image={item.image}
            />
          ))}
        </Grid>

        <SocialContact />
        <Footer />
      </Wrapper>
    </>
  )
};