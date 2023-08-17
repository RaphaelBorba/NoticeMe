import styled from "styled-components";
import { collors } from "../../assets/style/collors";



export const AdminPostCss = styled.li`

    width: 100%;
    height: 300px;
    border: 3px solid;
    border-color: ${collors.pink};
    display: flex;
    gap: 30px;
    padding: 30px;

    && >:first-child{
        display: flex;
        flex-direction: column;
        gap: 40px;
        h2{
            font-size: 40px;
            text-align: center;
        }
        span{
            font-size: 25px;
            line-height: 30px;
        }
    }

    &&>:last-child{
        display: flex;
        flex-direction: column;
        gap: 20px;
        img{
            width: 180px;
        }
        article{
            font-size: 30px;
            align-self: center;
            display: flex;
            gap: 20px;

        }
    }
`;