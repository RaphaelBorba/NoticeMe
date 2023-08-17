import styled from "styled-components";
import { collors } from "../../assets/style/collors";



export const AdminCss = styled.main`

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
    }

    ul{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    div{
        display: flex;
        gap: 20px;

        svg{
        font-size: 30px;
        
        }
    } 
  
        
`;

