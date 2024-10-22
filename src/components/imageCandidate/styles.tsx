import styled from "styled-components";
import { colors } from "../../styles/colors.ts"
export const ImageCandidatesContainer = styled.div`
    .image{
        background-color: ${colors.primaryColor};
        border-radius: 100px;
        box-shadow: 2px 2px 15px 0px #C4C4C4;
        width: 100px;
        height: 100px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;  
    }   
    .img {
        display: block;
        max-width: 100%; 
        max-height: 100%; 
        border-radius: 50%;
    }
  }
`