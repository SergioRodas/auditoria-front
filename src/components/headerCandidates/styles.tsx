import styled from "styled-components";
import { colors } from "../../styles/colors.ts"

export const CandidatesContainer = styled.div`
    overflow-x: auto;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    padding: 10px 10px;

    .candidate {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0px 15px; 
        font-weight: 700;
        height: 100px;
        width: 230px;
    }
    p {
        margin: 0px 10px 0px 0px;
        font-family: 'Poppins';
        font-size: 22px;
        font-weight: 600;
        line-height: 33px;
        letter-spacing: 0em;
        text-align: center;
    }
    .name-candidate-one{
        color: ${colors.candidateOne}
    }
    .name-candidate-two{
        color: ${colors.candidateTwo}
    }
    .name-candidate-three{
        color: ${colors.candidateThree}
    }

    @media only screen and (max-width: 768px) {
        justify-content: center;
        p {
            margin: 0px 10px 0px 0px;
            font-family: 'Poppins';
            font-size: 15px;
            font-weight: 600;
            line-height: 33px;
            letter-spacing: 0em;
            text-align: center;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        justify-content: center;
        .candidate {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0px 15px; 
            font-weight: 700;
            height: 100px;
            width: 280px;
        }
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
        .candidate {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0px 15px; 
            font-weight: 700;
            height: 100px;
            width: 400px;
        }
    }

    @media only screen and (max-width: 2560px) {
        .candidate {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0px 15px; 
            font-weight: 700;
            height: 100px;
            width: 400px;
        }
    }
`