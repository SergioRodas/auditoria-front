import { ImageCandidatesContainer } from "../imageCandidate/styles.tsx";

const ImageCandidate = ({children}) => {
    return (
        <ImageCandidatesContainer>
            <div className="image">
                {children}
            </div>
        </ImageCandidatesContainer>
    );
};

export default ImageCandidate;