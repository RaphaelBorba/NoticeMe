import styled from "styled-components";
import { collors } from "../../assets/style/collors";



export const ProfileCss = styled.main`

    padding: 180px 80px 50px 0;
    display: flex;
    justify-content: flex-end;
    
    
    section{
        position: fixed;
        top: 180px;
        left: 80px;
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 50px;
        nav{
            display: flex;
            align-items: center;
            gap: 40px;
            img{
                width: 300px;
                border-radius: 50%;
            }
            h1{
                font-size: 80px;
            }
        }
        span{
            font-size: 25px;
            line-height: 30px;
        }
        button{
            width: 200px;
            background-color: #7E57C2;
            border: none;
            height: 60px;
            border-radius: 20px;
            color: white;
            font-size: 25px;
            cursor: pointer;
            transition: .5s;
        }
        button:hover{

            background-color: ${collors.purple};
        }
    }

    ul{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
`;