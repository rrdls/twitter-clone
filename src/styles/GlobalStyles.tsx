import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
        outline:0;
        color: var(--white);
    }

    html, body, #root{
        max-height:100vh;
        max-width: 100vw;

        height: 100%;
        width: 100%;

        font-family: --apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    html {
        background-color: var(--primary)
    }

   
    :root{
        --primary: #000;
        --secondary: #15181C;
        --search: #202327;
        --white: #D9D9D9;
        --gray: #7A7A7A;
        --outline: #2F3336;
        --retweet: #00C06B;
        --like: #E8265E;
        --twitter: #33A1F2;
        --twitter-dark-hover: #011017;
        --twitter-light-hover: #2C8ED6;
    }

`;

export { GlobalStyle };
