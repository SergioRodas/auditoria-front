import styled from "styled-components";
import { colors } from "../../../styles/colors.ts";

export const DashboardContainer = styled.div`
  background-color: ${colors.background};
  padding: 24px;
  font-family: Poppins, sans-serif;
  .dashboard-title {
    font-weight: 700;
    font-size: 22px;
    color: ${colors.black};
    text-align: center;
  }
  .dashboard-title-span {
    color: ${colors.red};
  }

  @media only screen and (max-width: 700px) {
    margin-top: 10px;
  }
  @media only screen and (max-width: 580px) {
    margin-top: 26px;
  }
`;

export const AnalysisContainer = styled.div`
  padding: 10px 0px 1px 0px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #0000001a;
  background-color: ${colors.primaryColor};
  margin-bottom: 24px;
  .dashboard-title {
    font-weight: 700;
    font-size: 22px;
    color: ${colors.black};
    text-align: center;
    padding: 10px 0px;
  }
  .negative {
    color: red;
  }
  .container-in-columns {
    padding: 20px;
  }
  .title-mention-column {
    font-weight: 500;
    font-size: 20px;
    margin: 10px;
  }
  .pharagraph-mention-column {
    margin: 10px;
  }
  .fuente-mention-column {
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin: 10px;
    color: blue;
    font-weight: 500;
    text-decoration: underline;
  }
  .loading {
    margin: 50px 0px;
  }

  @media only screen and (max-width: 346px) {
    &:first-child {
      margin-top: 30px;
    }
  }
`;

export const BalanceContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 0px 1px 0px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px 0px #0000001a;
    background-color: ${colors.primaryColor};
    margin-bottom: 24px;

    .balanceLoader, .balancePlaceholder {
      min-width: 50%;
      margin: 20px 0;
    }

    .full-width {
      width: 100%;
    }

    @media only screen and (max-width: 346px) {
        &:first-child {
            margin-top: 30px;
        }
    }
    @media only screen and (max-width: 1000px){
        flex-direction: column-reverse;
    }
`;

export const Button = styled.button`
  background-color: #660033;
  color: ${colors.primaryColor};
  padding: 10px;
  cursor: pointer;
  border: none;
  position: fixed;
  bottom: 20px;
  right: 5px; 
  width: 45px;
  height: 45px;
  border-radius: 30px;

  &:hover {
    background-color: #9C3066;
    color: ${colors.primaryColor};
  }
`;