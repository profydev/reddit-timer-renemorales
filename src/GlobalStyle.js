import { createGlobalStyle } from 'styled-components';
import '@fontsource/montserrat';
import '@fontsource/bitter';

const GlobalStyle = createGlobalStyle`
/** Motserrat Regular **/
@font-face {
  font-family: "Montserrat";
  font-weight: 400;
  font-style: normal;
} 
/** Motserrat Regular **/
@font-face {
  font-family: "Montserrat";
  font-weight: 500;
  font-style: normal;
}
/** Motserrat SemiBold **/
@font-face {
  font-family: "Montserrat";
  font-weight: 600;
  font-style: normal;
}
/** Motserrat Bold **/
@font-face {
  font-family: "Montserrat";
  font-weight: 700;
  font-style: normal;
}

/** Bitter Regular**/ 
@font-face {
  font-family: "Bitter";
}

body{
  font-family: ${(props) => props.theme.font.family.default};
  font-size: ${(props) => props.theme.font.size.default};
  line-height: ${(props) => props.theme.font.lineHeight.default};
  color: ${(props) => props.theme.color.text};
}
`;

export default GlobalStyle;
