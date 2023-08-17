import styled from "styled-components";
import { collors } from "../../../assets/style/collors";

export const CommentsCss = styled.section`
    width: 50%;
    border: 3px solid;
    border-color: ${ collors.lightPink };
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 20px;

    h2{
        font-size: 30px;
        align-self: center;
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 20px;
        
    }


`