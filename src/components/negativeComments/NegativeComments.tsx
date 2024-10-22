import React from "react";
import { NegativeCommentsContainer, Comments } from "./styles";
import ImageCandidate from "../../components/imageCandidate/ImageCandidate";

const NegativeComments = ({data, title}) => {

    return (
        <NegativeCommentsContainer>
            {data && data.length > 0 && (
                <React.Fragment>
                    <Comments>
                        <div className="container-title-img">
                            <div className="dashboard-title">{title}</div>
                            <div className="container-img-candidate">
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
                        <table className="table table-sm">
                            <thead>
                            <tr>
                                <th scope="col" className="td-width"></th>
                                <th scope="col" className="td-width">
                                    Programa
                                </th>
                                <th scope="col" className="td-width">
                                    Autor
                                </th>
                                <th scope="col" className="td-bg">
                                    Mención Negativa
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((comment, idx) => {
                                const parts = comment?.mencion.includes("Claudia Sheinbaum")
                                    ? comment?.mencion.split("Claudia Sheinbaum")
                                    : comment?.mencion.split("Sheinbaum");
                                return (
                                    <tr key={idx}>
                                        <th className="td-width-left">{comment?.cadena}</th>
                                        <td>{comment?.programa}</td>
                                        <td>{comment?.autor}</td>
                                        <td className="td-color-black">
                                            {parts && parts.length > 1 && (
                                                <>
                                                    {parts[0]}
                                                    <span className="td-color-candidate">
                                                         {parts.length === 3 ? "Claudia Sheinbaum" : "Sheinbaum"}
                                                    </span>
                                                        {parts[parts.length - 1]}
                                                </>
                                            )}
                                            {parts && parts.length === 1 && <>{parts[0]}</>}
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </Comments>
                </React.Fragment>
            )}
        </NegativeCommentsContainer>
    );
};

export default NegativeComments;
