import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    color: inherit;
    font-family: 'SUITE', sans-serif;
  }

  :root {
    --primary-100:#D7FEDE;
    --primary-200:#9BFDAF;
    --primary-300:#51FB73;
    --primary-400:#03E85B;
    --primary-500:#02B550;
    --primary-600:#029743;
    --primary-700:#017936;
    --primary-800:#015B28;
    --primary-900:#013D1B;
    
    --secondary-100:#B8DCFE;
    --secondary-200:#86C4FE;
    --secondary-300:#2192FD;
    --secondary-400:#0379E8;
    --secondary-500:#025EB5;
    --secondary-600:#024F97;
    --secondary-700:#014483;
    --secondary-800:#013565;
    --secondary-900:#012547;

    --gray-100:#EFF0F0;
    --gray-200:#DDDFDE;
    --gray-300:#C5C9C7;
    --gray-400:#A5ACA8;
    --gray-500:#8B938E;
    --gray-600:#6C7470;
    --gray-700:#535A56;
    --gray-800:#3B403D;
    --gray-900:#222523;

    --black: #000;
    --white: #FFF;
    --error: #FD3721;

    font-size: 10px;
    --title-l: 3.2rem;
    --title-m: 2.4rem;
    --title-s: 2rem;
    --text-l: 1.6rem;
    --text-s: 1.4rem;
    --text-s: 1.2rem;

    --font-bold: 700;
    --font-medium: 500;
    font-weight: var(--font-medium);
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, textarea {
    font-family: 'SUITE', sans-serif;
    padding: 0;
    border: none;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    background-color: inherit;
  }

  button {
    cursor: pointer;
  }

  ol, ul, li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
