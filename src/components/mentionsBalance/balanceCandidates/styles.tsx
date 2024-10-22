import styled from "styled-components";
import { colors } from "../../../styles/colors.ts"

export const CandidatesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow-x: auto;
    padding: 10px 0px;

    .candidate {
        display: flex;
        flex-direction: row;
        justify-content: right;
        align-items: center;
        background-color: ${colors.grayLightColor};
        box-shadow: 2px 4px 6px 2px #00000040;
        margin: 5px 18px;
        border-radius: 100px;
        font-weight: 700;
        height: 100px;
        width: 220px;
        .percentage-candidate-1 {
            padding: 10px 15px 10px 10px;
            font-size: 40px;
            color: ${colors.candidateOne}
        }
        .percentage-candidate-2 {
            padding: 10px 15px 10px 10px;
            font-size: 40px;
            color: ${colors.candidateTwo}
        }
        .percentage-candidate-3 {
            padding: 10px 15px 10px 10px;
            font-size: 40px;
            color: ${colors.candidateThree}
        }
        .image {
            background-color: ${colors.primaryColor};
            border-radius: 100px;
            box-shadow: 2px 2px 15px 0px #C4C4C4;
            width: 100px;
            height: 100px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            .img {
                display: block;
                max-width: 100%;
                max-height: 100%;
                border-radius: 50%;
            }
        }
    }

        @media only screen and (max-width: 768px) {
            .candidate {
            display: flex;
            flex-direction: row;
            justify-content: right;
            align-items: center;
            background-color: ${colors.grayLightColor};
            box-shadow: 2px 4px 6px 4px #00000040;
            margin: 0px 5px;
            border-radius: 100px;
            font-weight: 700;
            height: 80px;
            width: 130px;

            .percentage-candidate-1 {
                padding: 10px 0px 10px 10px;
                font-size: 22px;
                color: ${colors.candidateOne}
            }

            .percentage-candidate-2 {
                padding: 10px 0px 10px 10px;
                font-size: 22px;
                color: ${colors.candidateTwo}
            }

            .percentage-candidate-3 {
                padding: 10px 0px 10px 10px;
                font-size: 22px;
                color: ${colors.candidateThree}
            }

            .image {
                background-color: ${colors.primaryColor};
                border-radius: 100px;
                box-shadow: 2px 2px 15px 0px #C4C4C4;
                width: 80px;
                height: 80px;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                .img {
                    display: block;
                    max-width: 100%;
                    max-height: 100%;
                    border-radius: 50%;
                }
            }
        }
    }
`