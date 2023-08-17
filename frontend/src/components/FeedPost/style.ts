import styled from "styled-components";
import { collors } from "../../assets/style/collors";

export const Main = styled.section`
    display: flex;
    flex-direction: row;
    //align-items: center;
    border: 3px solid;
    border-color: ${ collors.lightPink };
    border-radius: 5px;
    margin-top: 30px;
    padding: 30px;
    gap: 30px;

    img{
        width: 250px;
        height: 250px;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;

        div{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;

            img{
                width: 60px;
                height: 60px;
                border-radius: 50px;
            }

            h2{
                font-size: 30px;
            }
        }


        h3{
            font-size: 40px;
        }

        span{
            font-size: 28px;
        }
    }
`