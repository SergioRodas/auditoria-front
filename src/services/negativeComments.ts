import {NegativeCommentsResults} from "../interfaces/NegativeCommentsResult.ts";
import {client, gql} from "./api";

interface NegativeCommentsResponse {
    getNegativeMentionsforRadioOrTelevision: NegativeCommentsResults;
}

const NEGATIVE_COMMENTS_QUERY = gql`
  query GetNegativeMentionsForRadioOrTelevision($fecha: String!, $tipoMedio: String!, $semanal: Boolean) {
    getNegativeMentionsforRadioOrTelevision(fecha: $fecha, tipoMedio: $tipoMedio, semanal: $semanal) {
      id
      tipo_medio
      cadena
      programa
      autor
      mencion
    }
  }
`;


export const fetchNegativeComments = async (fecha: string, tipoMedio: string, token: string, semanal: boolean): Promise<NegativeCommentsResults> => {
    try {
        const { data } = await client.query<NegativeCommentsResponse>({
            query: NEGATIVE_COMMENTS_QUERY,
            variables: { fecha, tipoMedio, semanal},
            context: {
                headers: {
                    Authorization: token,
                },
            },
        });
        return data.getNegativeMentionsforRadioOrTelevision;
    } catch (error: any) {
        console.log(error);
        throw new Error(
            "Ocurrió un error al obtener los comentarios negativos. Por favor, inténtalo de nuevo más tarde."
        );
    }
};
