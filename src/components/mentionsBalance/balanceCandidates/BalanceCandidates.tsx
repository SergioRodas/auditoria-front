import React from "react";
import {CandidatesContainer} from "./styles.tsx";
import ImageCandidate from "../../imageCandidate/ImageCandidate.tsx";
import {TotalMentionsResponse} from "../../../interfaces/MentionsBalance.ts";
import {roundPercentage} from "../../../utils/percentageUtils.ts";
import {formatImageFilename} from "../../../utils/nameUtils.ts";

interface BalanceCandidatesProps {
  data: TotalMentionsResponse | null;
}

const BalanceCandidates = ({ data }: BalanceCandidatesProps) => {
  const indices = [0, 1, 2];

  return (
      <CandidatesContainer>
          {indices.map((index) => {
              const candidate = data?.TotalMentionsCountResolver.menciones[index];
              if (!candidate) return;
              const { Actor } = candidate;
              const formattedName = formatImageFilename(Actor);
              const imagePath = `/images/${formattedName}`;

              return (
                  <div className="candidate" key={index}>
                      <div className={`percentage-candidate-${index + 1}`}>
                          {roundPercentage(data?.TotalMentionsCountResolver.menciones[index]?.PorcentajeTotal || 0)}%
                      </div>
                      <ImageCandidate>
                          <img
                              className="img"
                              alt={Actor}
                              src={imagePath}
                              width={"120px"}
                              height={"120px"}
                              style={{ verticalAlign: "middle" , objectFit: "contain" }}
                          />
                      </ImageCandidate>
                  </div>
              );
          })}
      </CandidatesContainer>

  );
};

export default BalanceCandidates;
