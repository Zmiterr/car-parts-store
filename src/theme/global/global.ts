import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import { base } from './base';

const GlobalStyle = createGlobalStyle`
    ${base}
    ${reset}
`;

export default GlobalStyle;
