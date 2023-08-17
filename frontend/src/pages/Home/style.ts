import styled from "styled-components";
import { collors } from "../../assets/style/collors";

export const HeroContainer = styled.section`
    background-color: ${collors.lightPink};
    width: 100%;
    padding: 30px;
    margin-top: 120px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    

    img{
        width: 45%;
    }

    div{
        //width: 35%;
    }

    p{
        font-size: 120px;
        line-height: 1.2em;
    }

   
`

export const TagsContainer = styled.ul`
    display: flex;
    gap: 30px;
    width: 100%;
`

export const Main = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0px 40px 0px 40px ;
    margin-top: 60px;
    margin-bottom: 30px;

`
export const FeedContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

`