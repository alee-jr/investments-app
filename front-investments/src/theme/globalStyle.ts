import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        height: 100vh;
        padding: 0;
        margin: 0;
        font-family: 'Libre Franklin', sans-serif;
    }

    #__next{
        height: calc(100% - 64px);
    }
`;
