import styled from "styled-components";
import { collors } from "../../../assets/style/collors";



export const FormsStyle = styled.div`

    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    

    h1{
        font-weight: 400;
        font-size: 50px;
        color: #2D033B;
        font-weight: 500;
    }
    form{

        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 30px;

        section{

            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 2px solid ${collors.darkPurple};
            height: 50px;
            

            div{
                width: 10%;
                font-size: 25px;
                color: ${collors.darkPurple};
                display: flex;
                justify-content: center;
            }
            input{

                width: 90%;
                border: none;
                background-color: white;
                height: 100%;
                padding-left: 10px;
                font-size: 25px;
                color: ${collors.darkPurple};

            }
            input:focus{
                outline: 0;
            }
        }

            button{

                margin: 0 auto;
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
    span{

        color: ${collors.darkPurple};
        cursor: pointer;
        
    }
    span:hover{
        text-decoration: underline;
    }

    nav{
        font-size: 45px;
        color: ${collors.darkPurple};
        padding-top: 20px;
        display: flex;
        gap: 45px;
        
    }
    nav > *{
        cursor: pointer;
        transition: 0.3s;
        position: relative;
        
    }
    nav > *:hover{
        transform: scale(1.2);
        color: #7E57C2;
    }


    @media (max-width: 800px){

        width: 100%;

        form{
            width: 90%;
        }
    }
`