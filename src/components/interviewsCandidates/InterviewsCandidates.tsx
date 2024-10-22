import React, { useState } from 'react';
import { CarouselContainer, IntervewsAsList } from './styles';
import ImageCandidate from '../../components/imageCandidate/ImageCandidate';
import Carousel from "react-bootstrap/Carousel";
import ArrowLeft from "../../assets/icons/ArrowLeft.tsx";
import ArrowRight from "../../assets/icons/ArrowRight.tsx";

const InterviewsCandidates = ({ data, src, showAsList }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const handlePrev = () => {
        setIndex(index === 0 ? data[0].interviews.length - 1 : index - 1);
    };

    const handleNext = () => {
        setIndex(index === data[0].interviews.length - 1 ? 0 : index + 1);
    };

    if (showAsList) {
        return (
            <IntervewsAsList>
                {data[0]?.interviews?.map((item, itemIndex) => (
                    <div key={itemIndex} className="interview-container">
                        <div className="img-candidate">
                            <ImageCandidate>
                                <img
                                    className="img"
                                    alt="candidate"
                                    src={src}
                                    width={"120px"}
                                    height={"120px"}
                                    style={{ verticalAlign: "middle", objectFit: "contain" }}
                                />
                            </ImageCandidate>
                        </div>
                        <div className="container-in-columns">
                            <div>
                                <p className="title-interview">{item.titulo}</p>
                                <p className="pharagraph-interview">{item.sintesis}</p>
                                <a href={item.url} target="_blank"
                                    className="fuente-interview">{item.nombre_testigo}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </IntervewsAsList>
        );
    } else {
        return (
            <CarouselContainer>
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    interval={null}
                    indicators={false}
                >
                    {data[0]?.interviews?.map((item, itemIndex) => (
                        <Carousel.Item key={itemIndex}>
                            <div className="slide-container">
                                <div className="custom-carousel-prev">
                                    <ArrowLeft onClick={handlePrev} />
                                </div>
                                <div className="img-candidate">
                                    <ImageCandidate>
                                        <img
                                            className="img"
                                            alt="candidate"
                                            src={src}
                                            width={"120px"}
                                            height={"120px"}
                                            style={{ verticalAlign: "middle", objectFit: "contain" }}
                                        />
                                    </ImageCandidate>
                                </div>
                                <div className="container-in-columns">
                                    <div>
                                        <p className="title-interview">{item.titulo}</p>
                                        <p className="pharagraph-interview">{item.sintesis}</p>
                                        <a href={item.url} target="_blank"
                                            className="fuente-interview">{item.nombre_testigo}</a>
                                    </div>
                                </div>
                                <div className="custom-carousel-next">
                                    <ArrowRight onClick={handleNext} />
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </CarouselContainer>
        );
    }
}

export default InterviewsCandidates;
