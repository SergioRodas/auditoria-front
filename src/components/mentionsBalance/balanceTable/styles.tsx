import styled from "styled-components";
import { colors } from "../../../styles/colors.ts"

export const Table = styled.div`
  text-align: center;
  overflow: auto;
  .table {
    margin-bottom: 10px;
    th {
      font-size: 18px;
      font-weight: 600;
    }
    .thead-data {
      text-align: left;
      font-size: 16px;
      font-weight: 600;
    }
    td {
      font-size: 18px;
      font-weight: 500;
    }
    .td-data {
      font-size: 20px;
      font-weight: 700;
    }
    .candidate-1 {
      color: ${colors.candidateOne}
    }
    .candidate-2 {
      color: ${colors.candidateTwo}
    }
    .candidate-3 {
      color: ${colors.candidateThree}
    }
    .td-data-candidate-1 {
      font-size: 20px;
      font-weight: 700;
      color: ${colors.candidateOne}
    }
    .td-data-candidate-2 {
      font-size: 20px;
      font-weight: 700;
      color: ${colors.candidateTwo}
    }
    .td-data-candidate-3 {
      font-size: 20px;
      font-weight: 700;
      color: ${colors.candidateThree}
    }
    .th-width-total {
      width: 200px;
    }

    @media only screen and (max-width: 768px) {
      .candidate-one-size {
        font-size: 13px;
        color: ${colors.candidateOne}
      }
      .th-width-total {
        width: 110px;
        font-size: 13px;
      }
    }
  }
`