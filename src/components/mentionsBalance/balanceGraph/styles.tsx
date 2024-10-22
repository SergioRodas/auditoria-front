import styled from "styled-components";
import { colors } from "../../../styles/colors.ts";

export const GraphContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin: 20px 0px;
    overflow: auto;
    .graph-title{
        font-weight: 700;
        font-size: 22px;
        color: ${colors.black};
        text-align: left;
    }
    @media (min-width: 375px) and (max-width: 480px){
        .recharts-wrapper{
            max-width: 400px;
        }
        .recharts-legend-wrapper{
            max-width: 300px;
            font-size: 14px;
        }
        .recharts-default-tooltip{
            max-width: 200px;
            font-size: 12px;
        }
        .graph-title{
            font-size: 20px;
            margin-left: 10px;
            text-align: center;
        }
    }
    @media (min-width: 481px) and (max-width: 779px){
        .recharts-wrapper{
            max-width: 500px;
        }
        .recharts-legend-wrapper{
            max-width: 400px;
            font-size: 14px;
        }
        .recharts-default-tooltip{
            max-width: 400px;
            font-size: 14px;
        }
        .graph-title{
            font-size: 22px;
            margin-left: 10px;
            text-align: center;
        }
    }
    @media (min-width: 780px) and (max-width: 1000px){
        .recharts-wrapper{
            max-width: 600px;
        }
        .recharts-legend-wrapper{
            max-width: 500px;
        }
        .recharts-default-tooltip{
            max-width: 450px;
            font-size: 14px;
        }
        .graph-title{
            font-size: 22px;
            margin-left: 10px;
            text-align: center;
        }
    }    
`