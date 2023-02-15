import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Media from './../theme/media-breackpoint'; 

 

var Gs = {}
 
Gs.GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
    font-family: 'gilroy', sans-serif;
    background-color:#000; 
    color:#fff; 
  }  
 
  html {
  --scroll-behavior: smooth;
  scroll-behavior: smooth;
}
 
`; 


Gs.MainBox = styled.div``;

Gs.Container = styled.div`
margin:0 auto; width: 100%; max-width:1200px; padding:0px 15px;

  &.hmFix01{ position:relative; z-index:3;}

`;
 

export default Gs; 

