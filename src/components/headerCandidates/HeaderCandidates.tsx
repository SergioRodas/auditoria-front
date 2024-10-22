import React from "react";
import { CandidatesContainer, Container } from "../headerCandidates/styles.tsx";
import ImageCandidate from "../imageCandidate/ImageCandidate.tsx";

const HeaderCandidates = () => {
  return (
    <CandidatesContainer>
      <Container>
        <div className="candidate">
          <p className="name-candidate-one">CLAUDIA SHEINBAUM</p>
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
        <div className="candidate">
          <p className="name-candidate-two">XÓCHITL GÁLVEZ </p>
          <ImageCandidate>
            <img
                className="img"
                alt="candidate"
                src="/images/xochitl_galvez.png"
                width={"120px"}
                height={"120px"}
                style={{verticalAlign: "middle" , objectFit: "contain"}}
            />
          </ImageCandidate>
        </div>
        <div className="candidate">
          <p className="name-candidate-three">JORGE ÁLVAREZ MÁYNEZ</p>
          <ImageCandidate>
            <img
                className="img"
                alt="candidate"
                src="/images/jorge_alvarez_maynez.png"
                width={"120px"}
                height={"120px"}
                style={{verticalAlign: "middle" , objectFit: "contain"}}
            />
          </ImageCandidate>
        </div>
      </Container>
    </CandidatesContainer>
  );
};

export default HeaderCandidates;
