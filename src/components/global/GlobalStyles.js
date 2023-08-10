import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');


    *{
        font-family: 'Outfit', sans-serif;

        
    }
    h1, h2, h3{
        
    }

    body{
        margin: 2% 5%;
        background-color: #d1fffc;
        @media screen and (max-width: 768px){
            margin: 2% 10%;
        }
    }
    
    p{
        
        
    }
    span{
        
    }
`;

export default GlobalStyles;
