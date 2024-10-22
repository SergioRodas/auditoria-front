import styled from "styled-components";
import { colors } from "../../../styles/colors.ts";

export const ResumeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: right;
    text-align: center;
    margin: 20px 0px;
    overflow: auto;
    .balance-title{
        font-weight: 700;
        font-size: 22px;
        color: ${colors.black};
        text-align: left;
    }
    .balance-content{
        text-align: left;
        font-size: 14px;
        margin: 10px;
        overflow-y: auto;
    }
    @media (min-width: 375px) and (max-width: 480px){
        .balance-title{
            font-size: 20px;
        }
        .balance-content{
            font-size: 14px;
            margin: 10px;
            max-width: 400px;
            max-height: 400px;
        }
    }
    @media (min-width: 481px) and (max-width: 780px){
        .balance-title{
            font-size: 22px;
        }
        .balance-content{
            font-size: 14px;
            margin: 10px;
            max-height: 400px;
        }
    }
    @media (min-width: 780px) and (max-width: 1000px){
        .balance-title{
            font-size: 22px;
        }
        .balance-content{
            font-size: 14px;
            margin: 10px;
            max-height: 400px;
        }
    }
`;