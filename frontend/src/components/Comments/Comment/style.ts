import styled from "styled-components";

export const CommentCss = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    span{
        font-size: 20px;
        margin-left: 60px;
        line-height: 1.3em;
    }
`

export const CommentInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    gap: 10px;

    img{
        width: 50px;
        height: 50px;
        border-radius: 50px;

    }
    h3{
        font-size: 25px;
    }

   
`

export const SVGContainer = styled.div`
    display: flex;
    gap: 10px;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 60px;
    cursor: pointer;
`