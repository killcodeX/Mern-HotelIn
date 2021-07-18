import styled from 'styled-components';


export const BannerWrapper = styled.div`
background: url(${process.env.PUBLIC_URL+'/assets/banners/1.jpg'});
position: absolute;
width: 100%;
height: 100%;
top: 0px;
left: 0px;
pointer-events: all;
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