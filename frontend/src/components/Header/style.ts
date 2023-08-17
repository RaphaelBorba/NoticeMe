import styled from "styled-components";
import { collors } from "../../assets/style/collors";



export const HeaderCSS = styled.header`
    
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${collors.darkPurple};
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    width: 100vw;
    padding-inline: 50px;

    div:first-child{
        display: flex;
        align-items: center;
        gap: 20px;
        h1{
            font-size: 35px;
        }
        img{
            width: 110px;
        }
    }
    div:last-child{
        display: flex;
        align-items: center;
        gap: 50px;

        nav{
            display: flex;
            align-items: flex-end;
            gap: 10px;
            cursor: pointer;
        }
        nav > :nth-child(1){
            font-size: 25px;
        }
        nav > :nth-child(2){
            font-size: 35px;
        }
    }
`;


export const SearchBarCss = styled.input`

    width: 350px;
    height: 40px;
    background-color: white;
    color: black;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    padding-left: 15px;

    &&:focus{
        outline: 0;
    }
`;