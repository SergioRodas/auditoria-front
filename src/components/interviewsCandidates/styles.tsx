import styled from "styled-components";
import { colors } from "../../styles/colors.ts"

export const CarouselContainer = styled.div`
    .slide-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0px 2px 4px 0px #0000001A;
        background-color: ${colors.primaryColor};
        margin: 30px 120px 20px 120px;
    }
    .carousel-inner{
        padding-top: 30px;
    }
    .carousel-control-prev, .carousel-control-next{
        display: none;
    }
    .custom-carousel-prev, .custom-carousel-next {
        cursor: pointer;
        position: absolute;
    }
    .custom-carousel-prev {
        left: 70px;
    }
    .custom-carousel-next {
        right: 70px;
    }
    .img-candidate{
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
    }
    .container-in-columns {
        padding: 20px;
    }
    .title-interview{
        font-weight: 500;
        font-size: 20px;
        margin: 35px 10px 10px 10px;
    }
    .pharagraph-interview {
        margin: 10px;
    }
    .fuente-interview {
        margin: 10px;
        color: blue;
        font-weight: 500;
        text-decoration: underline;
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        .slide-container {
            margin: 30px 60px 20px 60px;
        }
        .custom-carousel-prev {
            left: 30px;
        }
        .custom-carousel-next {
            right: 30px;
        }
        .interview {
            flex-basis: calc(50% - 20px);
        }
    }

    @media only screen and (max-width: 480px) {
        .slide-container {
            margin: 30px 20px 20px 20px;
        }
        .custom-carousel-prev {
            left: 20px;
        }
        .custom-carousel-next {
            right: 20px;
        }
        .interview {
            flex-basis: calc(100% - 20px);
        }
    }
`
export const IntervewsAsList = styled.div`
    .interview-container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0px 2px 4px 0px #0000001A;
        background-color: ${colors.primaryColor};
        margin: 80px 120px 30px 120px;
    }
    .img-candidate{
        position: absolute;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
    }
    .container-in-columns {
        padding: 20px;
    }
    .title-interview{
        font-weight: 500;
        font-size: 20px;
        margin: 35px 10px 10px 10px;
    }
    .pharagraph-interview {
        margin: 10px;
    }
    .fuente-interview {
        margin: 10px;
        color: blue;
        font-weight: 500;
        text-decoration: underline;
        cursor: pointer;
    }
`;