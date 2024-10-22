import React, {useState} from 'react';
import {NegativesMentionsInColumnsContainer, Button} from './styles';
import {AnalysisContainer} from '../../pages/dashboard/styles/dashboard.styled';
import ImageCandidate from '../../components/imageCandidate/ImageCandidate';
import { useEffect } from 'react';


const NegativesMentionsInColumns = ({data, isDownloading}) => {
    const [showAllMentions, setShowAllMentions] = useState(false);

    const handleShowMore = () => {
        setShowAllMentions(!showAllMentions);
    };

    useEffect(() => {
      if (isDownloading) {
        setShowAllMentions(true);
      } else {
        setShowAllMentions(false);
      }
    }, [isDownloading])

    const visibleMentions = showAllMentions ? data : data?.slice(0, 3);

    return (
        <NegativesMentionsInColumnsContainer className="negatives-mentions-container">
            <div className='container-header-mentions-columns'>
                <div className="dashboard-title">
                    MENCIONES <span className="dashboard-title-span">NEGATIVAS</span> PARA SHEINBAUM
                </div>
                <div className='img-candidate'>
                    <ImageCandidate>
                        <img
                            className="img"
                            alt="candidate"
                            src="/images/claudia_sheinbaum_pardo.png"
                            width={"120px"}
                            height={"120px"}
                            style={{verticalAlign: "middle", objectFit: "contain"}}
                        />
                    </ImageCandidate>
                </div>
            </div>
            {visibleMentions?.map((mention, index) => (
                <AnalysisContainer key={index}>
                    <div className='container-in-columns'>
                        <p className='title-mention-column'>{mention.titulo}</p>
                        <p className='pharagraph-mention-column'>{mention.sintesis}</p>
                        <div className="witnesses">
                            {mention.testigo.map((testigo, index) => (
                                <a href={testigo.url} target="_blank" rel="noopener noreferrer"
                                   className='fuente-mention-column' key={index}>
                                    <p>{testigo.medio}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </AnalysisContainer>
            ))}
            <div className='btn-in-columns'>
                <Button type='button' onClick={handleShowMore} id='expand-contract-mentions'>
                    {showAllMentions ? 'VER MENOS' : 'VER MÁS'}
                </Button>
            </div>
        </NegativesMentionsInColumnsContainer>
    );
}

export default NegativesMentionsInColumns;
