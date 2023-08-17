import styled from "styled-components";
import { collors } from "../../../assets/style/collors";

export const TrendingBoxCss = styled.div`
    width: 30%;
    height: 1000px;
    border: 3px solid;
    border-color: ${ collors.lightPink};
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;

    ul{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;

    }

    h2{
        font-size: 40px;
        margin-bottom: 20px;
    }
`