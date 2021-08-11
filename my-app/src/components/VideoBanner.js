import React from 'react';

import styled from 'styled-components';

const Video = styled.video`
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const VideoBanner = (props) => {
  return (
    <Video autoPlay playsInline muted loop><source src={props.video} type="video/mp4"></source></Video>
  )
}