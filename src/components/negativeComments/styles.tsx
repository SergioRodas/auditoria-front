import styled from "styled-components";
import { colors } from "../../styles/colors.ts";

export const NegativeCommentsContainer = styled.div`
  .dashboard-title {
    font-weight: 700;
    font-size: 22px;
    color: ${colors.black};
    text-align: center;
    padding: 0px 10px;
    margin: 0px 20px;
  }
  .container-img-candidate {
    display: flex;
    flex-direction: row;
    justify-content: right;
  }
  .container-title-img {
    display: flex;
    flex-direction: row;
    margin: 20px;
    justify-content: center;
    align-items: center;
  }
`;

export const Comments = styled.div`
  padding: 10px 0px 1px 0px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #0000001a;
  background-color: ${colors.primaryColor};
  margin-bottom: 24px;

  .td-width {
    width: 250px;
    background-color: ${colors.grayLightColor};
    padding: 15px 5px;
    border-bottom: 2px solid ${colors.black20};
    border-top: 2px solid ${colors.black20}
  }
  .td-bg {
    background-color: ${colors.grayLightColor};
    padding: 15px 5px;
    border-bottom: 2px solid ${colors.black20};
    border-top: 2px solid ${colors.black20}
  }
  .td-width-left {
    width: 200px;
    padding-left: 10px;
  }
  .td-color-black {
    color: ${colors.black80};
  }
  .td-color-candidate {
    color: ${colors.candidateOne};
    font-weight: 500;
  }

  @media only screen and (max-width: 1024px) {
    .td-width,
    .td-bg {
      width: auto;
    }
  }

  @media only screen and (max-width: 768px) {
    .td-width,
    .td-bg {
      width: auto;
    }
  }
`;
