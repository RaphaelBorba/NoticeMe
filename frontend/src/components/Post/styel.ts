import styled from "styled-components";
import { collors } from "../../assets/style/collors";

export const PostCss = styled.section`
    width: 50%;
    border: 3px solid;
    border-color: ${ collors.lightPink };
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    margin-top: 150px; 
    gap: 30px;
    //margin-bottom: 20px;
    
    h2{
        font-size: 40px;
    }

    img{
        width: 70px;
        height: 70px;
        border-radius: 50px;

    }

    span{
        font-size: 24px;
        margin-left: 80px;
        line-height: 1.3em;
    }

    article{
            align-self: center;
            width: 50%;
            font-size: 30px;
            display: flex;
            justify-content: space-around;           
        }
`
export const PostInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    svg{
        font-size: 2.5em;
        cursor: pointer;
        
    }

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }
`

