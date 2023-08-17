import { createGlobalStyle } from 'styled-components';
import localBgImage from '/sky.jpg';

const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(${localBgImage}); // Use the imported image as the URL
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
