import styled from "styled-components";
import { colors } from "../../styles/colors.ts"

export const NegativesMentionsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin: 20px;

.candidate-wrapper {
    position: relative;
    margin: 30px 10px;
    flex-basis: calc(33.33% - 20px);
}

.container-img-candidate {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%); 
    z-index: 1; 
    margin-top: 10px;
}

.mention {
    background-color: ${colors.grayLightColor};
    border-radius: 10px;
    box-shadow: 2px 4px 6px 4px #00000040;
    padding: 30px;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    height: 100%;
}

.no-mention-message {
    font-size: 20px;
    font-weight: 500;
}

.p-border {
    border-bottom: 2px solid #660033;
    padding-bottom: 15px;
    padding-top: 40px;
}

.p-mention {
    margin-top: 30px;
    font-weight: bold;
    font-size: 22px;
    background-color: darkgray;
    border-radius: 10px;
    padding: 5px;
}

.container-logos {
    display: flex;
    justify-content: space-evenly; 
    flex-wrap: wrap; 
    margin: 20px 0px;
}

.img-margin {
    margin: 0px 10px 15px 0px;
}

.container-img-candidate {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 25px;
}

@media (min-width: 1730px) and (max-width: 1920px) {
    .p-border {
        height: 123px;
    }
}
@media (min-width: 1100px) and (max-width: 1200px) {
    .p-border {
        height: 156px;
    }
}
@media only screen and (max-width: 1080px) {
    .no-mention-message {
        font-size: 17px;
    }
}
@media (min-width: 902px) and (max-width: 973px) {
    .p-border {
        height: 189px;
    }
}
@media (min-width: 774px) and (max-width: 901px) {
    .p-border {
        height: 222px;
    }
}
@media (min-width: 770px) and (max-width: 773px) {
    .p-border {
        height: 255px;
    }
}
@media only screen and (max-width: 768px) {
    .candidate-wrapper {
        flex-basis: calc(50% - 20px);
    }

    .no-mention-message {
        font-size: 13px;
    }
}
@media (min-width: 758px) and (max-width: 768px) {
    .p-border {
        height: 93px;
    }
}
@media (min-width: 528px) and (max-width: 554px) {
    .p-border {
        height: 111px;
    }
}
@media only screen and (max-width: 480px) {
    .candidate-wrapper {
        flex-basis: calc(100% - 20px);
    }

    .no-mention-message {
        font-size: 10px;
    }
}
`

export const Title =styled.div`
    font-size: 18px !important;
    margin: 10px 10px;
    .dashboard-title-span{
        color: ${colors.red};
    }
    @media only screen and (max-width: 768px) {
        .dashboard-title {
            font-size: 10px;
        }
    }

    @media only screen and (max-width: 480px) {
        .dashboard-title {
            font-size: 10px;
        }
    }
`

export const Candidate =styled.div`
    .mention-span{
        color: ${colors.red};
    }
    .claudiaSheinbaum-span{
        color: ${colors.candidateOne};
    }
    .xochitlGalvez-span{
        color: ${colors.candidateTwo};
    }
    .jorgeAlvarez-span{
        color: ${colors.candidateThree};
    }
@media only screen and (max-width: 768px) {
    .p-border {
        font-size: 12px;
    }
    .p-mention {
        font-size: 13px;
        font-weight: bold;
    }
}
`