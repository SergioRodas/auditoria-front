import {RelevanceResult} from "../interfaces/RelevanceResults.ts";
import {client, gql} from "./api";

interface RelevanceResponse {
    MediumMayorRelevanceResolver: RelevanceResult;
}

const RELEVANCE_QUERY = gql`
    query GetMediumMayorRelevance($fecha: String!, $medium: String!, $semanal: Boolean) {
        MediumMayorRelevanceResolver(fecha: $fecha, medium: $medium, semanal: $semanal) {
            claudiaSheinbaum {
                mentions {
                    medium
                    frequency
                    tendencies {
                        Positiva
                        Neutra
                        Negativa
                    }
                }
                totalPositivas
                totalNeutras
                totalNegativas
                totalTendencies
            }
            xochitlGalvez {
                mentions {
                    medium
                    frequency
                    tendencies {
                        Positiva
                        Neutra
                        Negativa
                    }
                }
                totalPositivas
                totalNeutras
                totalNegativas
                totalTendencies
            }
            jorgeAlvarez {
                mentions {
                    medium
                    frequency
                    tendencies {
                        Positiva
                        Neutra
                        Negativa
                    }
                }
                totalPositivas
                totalNeutras
                totalNegativas
                totalTendencies
            }
        }
    }
`;


export const fetchRelevance = async (fecha: string, medium: string, token: string, semanal: boolean): Promise<RelevanceResult> => {
    try {
        const { data } = await client.query<RelevanceResponse>({
            query: RELEVANCE_QUERY,
            variables: { fecha, medium, semanal },
            context: {
                headers: {
                    Authorization: token,
                },
            },
        });
        return data.MediumMayorRelevanceResolver;
    } catch (error: any) {
        console.log(error);
        throw new Error(
            "Ocurrió un error al obtener los medios de mayor relevancia. Por favor, inténtalo de nuevo más tarde."
        );
    }
};