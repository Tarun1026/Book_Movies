import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
margin:0px;
}

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
    *{
margin:-1.5px;
}
}
body,html{

font-family: Arial, sans-serif;
}



`;
