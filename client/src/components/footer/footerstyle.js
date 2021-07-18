import styled from "styled-components";



export const FooterWrapper = styled.footer`
width: 100%;
background-color: #ffffff;
background-image: url(${process.env.PUBLIC_URL+'/assets/banners/footer-bg.svg'});
background-repeat: no-repeat;
background-position: bottom;
background-size: 100%;
padding: 47px 0 66px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media only screen and (max-width: 480px) {
  padding: 60px 0 50px;
}
`;