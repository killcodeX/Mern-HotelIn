import styled from 'styled-components';

export const HomeWrapper = styled.div`
width: 100%;
min-height:100vh;
position: relative;
background-color: rgb(255, 255, 255);
`;

export const BannerWrapper = styled.div`
background: url(${process.env.PUBLIC_URL+'/assets/banners/3.jpg'});
width: 100%;
height: 100%;
position: absolute;
top: 0px;
left: 0px;
padding-top:90px;
&:after {
  display: block;
  content: '';
  width: 100%;
  height: 60%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  pointer-events: none;
  z-index: 0;
}
`;


//pointer-events: all;