import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}

ul{
    list-style: none;
    margin: 0;
    padding: 0;
}

h1, h2, h3, h4, h5, p{
    margin: 0;
}

img{
    display: block;
    width: 250px;
}

a{
    text-decoration: none;
}
`