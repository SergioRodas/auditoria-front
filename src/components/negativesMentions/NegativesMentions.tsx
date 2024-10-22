import React from 'react'
import { NegativesMentionsContainer, Title, Candidate } from './styles'
import ImageCandidate from '../../components/imageCandidate/ImageCandidate'
import styled from 'styled-components';
import { mediaTypesColumns } from "../../data/tableData.tsx"
import { MediumTrendsResponse } from '../../interfaces/mediumTrends.ts';
import { mediaTypes, candidates } from '../../data/mediumTrendsData.tsx';
import { checkIfArrayContainsElement } from '../../utils/arrayUtils';


const Logos = styled.div`
    margin: 5px;
`;

interface NegativeMentionsProps {
    data: MediumTrendsResponse | null;
}

const NegativesMentions = ({ data }: NegativeMentionsProps) => {

    const renderLogos = (column, candidate, mediatype) => {
        return column.map((item, index) => {
            if (data?.MediumTrendResolver[candidate][mediatype].includes(item.name))
                return (
                    <React.Fragment key={index}>
                        <Logos className="logo-style">
                            {item.logo}
                        </Logos>
                    </React.Fragment>
                )
        });
    };

    return (
        <>
            <Title className="dashboard-title">
                MEDIOS DE RELEVANCIA QUE GENERARON MENCIONES <span className="dashboard-title-span">NEGATIVAS</span>
            </Title>
            <NegativesMentionsContainer className="negative-mentions-container">
                {candidates.map((candidate, index) => (
                    <div key={index} className="candidate-wrapper">
                        <div className="container-img-candidate">
                            <ImageCandidate>
                                <img
                                    className="img"
                                    alt="candidate"
                                    src={candidate.image}
                                    width={"120px"}
                                    height={"120px"}
                                    style={{verticalAlign: "middle", objectFit: "contain"}}
                                />
                            </ImageCandidate>
                        </div>
                        <Candidate className="mention">
                            <p className="p-border">
                                MEDIOS NEGATIVOS HACIA <span className={`${candidate.key}-span`}> {candidate.name} </span>
                            </p>
                            {mediaTypes.map((mediaType, idx) => {
                                const containsElement = checkIfArrayContainsElement(
                                    mediaTypesColumns[mediaType.key],
                                    data?.MediumTrendResolver[candidate.key][mediaType.key]
                                );
                                return (
                                    <div key={idx}>
                                        <p className="p-mention">{mediaType.name}</p>
                                        <div className="container-logos">
                                            {containsElement ? (
                                                renderLogos(
                                                    mediaTypesColumns[mediaType.key],
                                                    candidate.key,
                                                    mediaType.key
                                                )
                                            ) : (
                                                <p className="no-mention-message">
                                                    Sin menciones para este medio
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </Candidate>
                    </div>
                ))}
            </NegativesMentionsContainer>
        </>
    );
}

export default NegativesMentions;