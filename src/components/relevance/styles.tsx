import styled from "styled-components";
import { colors } from "../../styles/colors.ts"

export const TableContainer = styled.div`
    overflow-x: auto;
`;

export const Table = styled.div`
    text-align: center;

    .table {
        th {
            font-size: 14px;
            font-weight: 500;
            width: 35px;
            color: ${colors.black80}
        }

        .thead-logo {
            text-align: left;
            font-weight: bold;
            border-top: none;
            border-bottom: none;
            padding-left: 10px;
            color: ${colors.black80}
        }

        .thead-title {
            font-size: 18px;
            width: 340px;
            background-color: ${colors.gray};
            border-top: 2px solid ${colors.black20};
            border-right: none;
            display: table-cell;
            vertical-align: middle;

            .tendencie {
                text-align: center;
                width: 158px;
                margin: auto;
            }
        }

        .thead-title-left {
            height: 100%;
            font-size: 14px;
            width: 340px;
            text-align: center;
            overflow-wrap: break-word;
            white-space: normal;
            justify-content: center;
            background-color: ${colors.gray};
            border-top: 2px solid ${colors.black20};
            border-right: none;
            border-bottom: 2px solid ${colors.black20};

            .title-relevance {
                text-align: left;
                width: 150px;
                margin: 0px 0px 0px 8px;
            }
        }
        .thead-foot{
            text-align: left;
            font-weight: bold;
            border-top: none;
            border-bottom: none;
            padding: 20px 0px 0px 10px;
            color: ${colors.black80}
        }

        td {
            font-size: 14px;
            font-weight: 500;
        }

        .data-negative-title {
            border-top: 2px solid ${colors.black20};
            border-left: 2px solid ${colors.black20};
            border-right: none;
            border-bottom: 2px solid ${colors.black20};
            color: ${colors.red}
        }

        .data-negative {
            padding-top: 20px;
            border-top: none;
            border-bottom: none;
            border-left: 2px solid ${colors.black20};
            border-right: none;
            color: ${colors.red}
        }

        .data-neutral-title {
            border-top: 2px solid ${colors.black20};
            border-bottom: 2px solid ${colors.black20};
            border-left: none;
            border-right: none;
            color: ${colors.black80}
        }

        .data-neutral {
            padding-top: 20px;
            border: none;
            color: ${colors.black80}
        }

        .data-positive-title {
            border-top: 2px solid ${colors.black20};
            border-bottom: 2px solid ${colors.black20};
            border-left: none;
            border-right: none;
            color: ${colors.positive}
        }

        .data-positive {
            padding-top: 20px;
            border: none;
            color: ${colors.positive}
        }

        .total-candidate-title {
            border-top: 2px solid ${colors.black20};
            border-bottom: 2px solid ${colors.black20};
            border-left: none;
        }

        .total-candidate-1 {
            padding-top: 20px;
            border-top: none;
            border-bottom: none;
            border-left: none;
            border-right: 2px solid ${colors.black20};
            color: ${colors.candidateOne}
        }

        .total-candidate-2 {
            padding-top: 20px;
            border-top: none;
            border-bottom: none;
            border-left: none;
            border-right: 2px solid ${colors.black20};
            color: ${colors.candidateTwo}
        }

        .total-candidate-3 {
            padding-top: 20px;
            border-top: none;
            border-bottom: none;
            border-left: none;
            color: ${colors.candidateThree}
        }

        .th-width-total {
            width: 200px;
        }
    }

    @media only screen and (max-width: 768px) {
        .table {
            th {
                font-size: 12px;
            }
    
            .thead-title {
                font-size: 12px;
            }
    
            .thead-title-left {
                font-size: 12px;
            }
    
            td {
                font-size: 12px;
            }
        }
    }
`
