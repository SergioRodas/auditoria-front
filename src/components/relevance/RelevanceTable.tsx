import React from "react";
import {TableContainer, Table} from "./styles.tsx";
import {candidates} from "../../data/mediumTrendsData.tsx";

const RelevanceTable = ({data, title, column}) => {

    return (
        <TableContainer>
            <Table>
                <table className="table table-sm">
                    <thead>
                    <tr>
                        <th scope="col" className="thead-title-left">
                            <p className="title-relevance">{title}</p>
                        </th>
                        {[...Array(3)].map((_, index) => (
                            <th key={index} scope="col" colSpan={4} className="thead-title">
                                <p className="tendencie">TENDENCIA</p>
                            </th>
                        ))}
                    </tr>
                    <tr>
                        <th scope="col" className="thead-data"></th>
                        <React.Fragment>
                            {[1, 2, 3].map((index) => (
                                <React.Fragment key={index}>
                                    <th scope="col" className="data-negative-title">
                                        NEG
                                    </th>
                                    <th scope="col" className="data-neutral-title">
                                        NEUTRA
                                    </th>
                                    <th scope="col" className="data-positive-title">
                                        POS
                                    </th>
                                    <th scope="col" className="total-candidate-title">
                                        TOTAL
                                    </th>
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    </tr>
                    </thead>
                    <tbody>
                    {column.map((item, columnIndex) => {
                        return (
                            <tr key={columnIndex}>
                                <th scope="row" className="thead-logo">
                                    {item.logo}
                                </th>
                                {candidates.map((candidate, candidateIndex) => {
                                    const mentions = data[candidate.key]?.mentions;
                                    const mediumMention = mentions?.find((mention) => mention.medium == item.name);
                                    const tendency = mediumMention?.tendencies;
                                    if (tendency) {
                                        return (
                                            <React.Fragment key={candidateIndex}>
                                                <td className="data-negative">{tendency.Negativa}</td>
                                                <td className="data-neutral">{tendency.Neutra}</td>
                                                <td className="data-positive">{tendency.Positiva}</td>
                                                <td className={`total-candidate-${candidateIndex + 1}`}>
                                                    {mediumMention?.frequency}
                                                </td>
                                            </React.Fragment>
                                        )
                                    } else {
                                        return (
                                            <React.Fragment key={candidateIndex}>
                                                <td className="data-negative">-</td>
                                                <td className="data-neutral">-</td>
                                                <td className="data-positive">-</td>
                                                <td className={`total-candidate-${candidateIndex + 1}`}>
                                                    -
                                                </td>
                                            </React.Fragment>
                                        )
                                    }
                                })}
                            </tr>
                        )
                    })}

                    </tbody>
                    <tfoot>
                    <tr>
                        <th className="thead-foot"> TOTALES</th>
                        {[data.claudiaSheinbaum, data.xochitlGalvez, data.jorgeAlvarez].map((candidateData, index) => (
                            <React.Fragment key={index}>
                                <td className="data-negative">{candidateData.totalNegativas}</td>
                                <td className="data-neutral">{candidateData.totalNeutras}</td>
                                <td className="data-positive">{candidateData.totalPositivas}</td>
                                <td className={`total-candidate-${index + 1}`}>{candidateData.totalTendencies}</td>
                            </React.Fragment>
                        ))}
                    </tr>
                    </tfoot>
                </table>
            </Table>
        </TableContainer>
    );
};

export default RelevanceTable;
