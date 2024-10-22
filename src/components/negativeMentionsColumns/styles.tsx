import styled from "styled-components";
import { colors } from "../../styles/colors.ts"

export const NegativesMentionsInColumnsContainer = styled.div`
    margin-top: 50px;
    .container-header-mentions-columns {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    .img-candidate {
        margin: 20px 50px;
    }
    .dashboard-title {
        font-weight: 700;
        font-size: 22px;
        color: ${colors.black};
        text-align: center;
        padding: 10px 0px;
        margin: 20px 0px;
    }
    .dashboard-title-span{
        color: ${colors.red};
    }
    .btn-in-columns {
        display: flex;
        flex-direction: row;
        justify-content: right;
    }
    .witnesses {
        display: flex;
        justify-content: right;
    }

    @media only screen and (max-width: 768px) {
        .mention {
            flex-basis: calc(50% - 20px); 
        }
    }

    @media only screen and (max-width: 480px) {
        .mention {
            flex-basis: calc(100% - 20px); 
        }
    }
`

export const Button = styled.button`
  background-color: ${colors.grayLightColor};
  color: ${colors.black80};
  border-radius: 10px;
  padding: 8px 20px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  border: 2px solid ${colors.black20};

  &:hover {
    background-color: ${colors.black20};
    font-weight: 600;
  }
`;

export const Candidate =styled.div`

`