import styled from "styled-components";
import { collors } from "../../../assets/style/collors";


export const DivImageCss = styled.div`

width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${collors.lightPink};


img{
    width: 75%;
}
span{
    width: 80%;
    font-size: 1vw;
    color: #7E57C2;
}

@media (max-width: 800px){
    display: none;
}
`