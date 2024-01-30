import {createGlobalStyle} from 'styled-components';
import 'modern-normalize/modern-normalize.css';

export const GlobalStyle = createGlobalStyle`
    body {
        background: #000;
        color: #ffffff;
    }

    #wrapper {
        display: grid;
        grid-template-columns:1fr 3fr;
        height: 100%;
        overflow: hidden;
    }

    * {
        padding: 0px;
        margin: 0px;
        border: 0px;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    a:focus,
    a:active {
        outline: none;
        color: currentColor;
    }

    html,
    body {
        height: 100%;
        min-width: 320px;
        scroll-behavior: smooth;
    }

    body {
        line-height: 1;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: auto;
    }


    input,
    button,
    textarea {
        font-size: inherit;
    }

    button {
        cursor: pointer;
        color: inherit;
        background-color: transparent;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul li {
        list-style: none;
    }


    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: inherit;
        font-size: inherit;
    }

    img {
        vertical-align: top;
        display: block;
    }

    button {
        border-radius: 6px;
        background: #312EB5;
        padding: 10px 30px;
        border: none;
    }
`;