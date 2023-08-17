import styled  from "styled-components";
import { collors } from "../../assets/style/collors";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Container = styled.section`
    width: 60%;
    height: 700px;
    border: 3px solid;
    border-color: ${ collors.lightPink };
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    margin-top: 200px; 
    gap: 30px;

    ul{
        display: flex;
        gap: 20px;
        margin-left: 10px;
    }

    svg{
        font-size: 50px;
        margin-left: 20px;
    }
`

export const TitleCss = styled.input`
    width: 98%;
    height: 50px;
    border: 3px solid;
    border-color: ${ collors.lightPink };
    border-radius: 5px;
    padding: 30px;
    align-self: center;
    font-size: 24px;
    outline: 0;

    :focus {
        border-color: ${collors.purple};
    }
`

export const TextBox = styled.textarea`
    width: 98%;
    height: 70%;
    border: 3px solid;
    border-color: ${ collors.lightPink };
    border-radius: 5px;
    padding: 30px;
    align-self: center;
    font-size: 24px;
    outline: 0;
    
    :focus {
        border-color: ${collors.pink};
    }
`