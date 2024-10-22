import React from "react";
import { Table, TableContainer } from "../generalTopics/styles.tsx";

const GeneralTopics = ({ topicsResult }) => {
  if (!topicsResult) return null;

  const claudiaMentions = topicsResult.claudiaSheinbaum?.mentions || [];
  const jorgeMentions = topicsResult.jorgeAlvarez?.mentions || [];
  const xochitlMentions = topicsResult.xochitlGalvez?.mentions || [];
  const maxRows = Math.max(
    claudiaMentions.length,
    jorgeMentions.length,
    xochitlMentions.length
  );

  const candidates = ["claudiaSheinbaum", "xochitlGalvez", "jorgeAlvarez"];

  const totalsByCandidate = candidates.map((candidate) => {
    const { totalNegativas, totalNeutrales, totalPositivas, totalTendencies } =
      topicsResult[candidate] || {};
    return {
      totalNegativas: totalNegativas || 0,
      totalNeutrales: totalNeutrales || 0,
      totalPositivas: totalPositivas || 0,
      totalTendencies: totalTendencies || 0,
    };
  });

  return (
    <TableContainer>
      <Table>
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col" className="thead-title-left">
                <p className="title-relevance">TEMA</p>
              </th>
              <th scope="col" colSpan={4} className="thead-title">
                <p className="tendencie">TENDENCIA</p>
              </th>
              <th scope="col" className="thead-title">
                <p className="tendencie">TEMA</p>
              </th>
              <th scope="col" colSpan={4} className="thead-title">
                <p className="tendencie">TENDENCIA</p>
              </th>
              <th scope="col" className="thead-title">
                <p className="tendencie">TEMA</p>
              </th>
              <th scope="col" colSpan={4} className="thead-title">
                <p className="tendencie">TENDENCIA</p>
              </th>
            </tr>
            <tr>
              <th scope="col" className="data-neutral-title"></th>
              <th scope="col" className="data-negative-title">
                {" "}
                NEG
              </th>
              <th scope="col" className="data-neutral-title">
                NEUTRA
              </th>
              <th scope="col" className="data-positive-title">
                {" "}
                POS
              </th>
              <th scope="col" className="total-candidate-title">
                TOTAL
              </th>

              <th scope="col" className="data-negative-title"></th>
              <th scope="col" className="data-negative-title">
                {" "}
                NEG
              </th>
              <th scope="col" className="data-neutral-title">
                NEUTRA
              </th>
              <th scope="col" className="data-positive-title">
                {" "}
                POS
              </th>
              <th scope="col" className="total-candidate-title">
                TOTAL
              </th>

              <th scope="col" className="data-negative-title"></th>
              <th scope="col" className="data-negative-title">
                {" "}
                NEG
              </th>
              <th scope="col" className="data-neutral-title">
                NEUTRA
              </th>
              <th scope="col" className="data-positive-title">
                {" "}
                POS
              </th>
              <th scope="col" className="total-candidate-title">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(maxRows)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {claudiaMentions[rowIndex] && (
                  <>
                    <th scope="row" className="thead-data">
                      {claudiaMentions[rowIndex].topic.toUpperCase()}
                    </th>
                    <td className="data-negative">
                      {claudiaMentions[rowIndex].tendencies?.Negativa || "-"}
                    </td>
                    <td className="data-neutral">
                      {claudiaMentions[rowIndex].tendencies?.Neutra || "-"}
                    </td>
                    <td className="data-positive">
                      {claudiaMentions[rowIndex].tendencies?.Positiva || "-"}
                    </td>
                    <td className="total-candidate-one">
                      {claudiaMentions[rowIndex].frequency}
                    </td>
                  </>
                )}
                {xochitlMentions[rowIndex] && (
                  <>
                    <th scope="row" className="thead-data">
                      {xochitlMentions[rowIndex].topic.toUpperCase()}
                    </th>
                    <td className="data-negative">
                      {xochitlMentions[rowIndex].tendencies?.Negativa || "-"}
                    </td>
                    <td className="data-neutral">
                      {xochitlMentions[rowIndex].tendencies?.Neutra || "-"}
                    </td>
                    <td className="data-positive">
                      {xochitlMentions[rowIndex].tendencies?.Positiva || "-"}
                    </td>
                    <td className="total-candidate-two">
                      {xochitlMentions[rowIndex].frequency}
                    </td>
                  </>
                )}
                {jorgeMentions[rowIndex] && (
                  <>
                    <th scope="row" className="thead-data">
                      {jorgeMentions[rowIndex].topic.toUpperCase()}
                    </th>
                    <td className="data-negative">
                      {jorgeMentions[rowIndex].tendencies?.Negativa || "-"}
                    </td>
                    <td className="data-neutral">
                      {jorgeMentions[rowIndex].tendencies?.Neutra || "-"}
                    </td>
                    <td className="data-positive">
                      {jorgeMentions[rowIndex].tendencies?.Positiva || "-"}
                    </td>
                    <td className="total-candidate-three">
                      {jorgeMentions[rowIndex].frequency}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              {totalsByCandidate.map((totals, index) => {
                const totalClassIndex = index % 3;
                let totalClass;
                if (totalClassIndex === 0) {
                  totalClass = "one";
                } else if (totalClassIndex === 1) {
                  totalClass = "two";
                } else {
                  totalClass = "three";
                }

                return (
                  <React.Fragment key={index}>
                    <th className="thead-foot"> TOTALES</th>
                    <td className="data-negative">{totals.totalNegativas}</td>
                    <td className="data-neutral">{totals.totalNeutrales}</td>
                    <td className="data-positive">{totals.totalPositivas}</td>
                    <td className={`total-candidate-${totalClass}`}>
                      {totals.totalTendencies}
                    </td>
                  </React.Fragment>
                );
              })}
            </tr>
          </tfoot>
        </table>
      </Table>
    </TableContainer>
  );
};

export default GeneralTopics;
