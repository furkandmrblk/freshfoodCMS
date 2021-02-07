import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 100%;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *,*::before,*::after {
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        
        overflow-x: hidden;
        
        background-color: #EAE4D9;
        color: #000;
        
        font-family: 'Poppins', sans-serif;
        font-weight: 500;

        h1,h2,h3,h4,h5,h6 {
            margin: 0;
        }
    }

    a, a:visited, a:hover {
        text-decoration: none;
    }
`;

export default GlobalStyle;
