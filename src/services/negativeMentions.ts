import { NegativeMentionsResult } from "../interfaces/NegativeMentionsResult.ts";
import { client, gql } from "./api";

interface NegativeMentionsResponse {
    getNegativeMentionsforColumnsResolver: NegativeMentionsResult;
}

const NEGATIVE_MENTIONS_QUERY = gql`
  query NegativeMentions($fecha: String!, $semanal: Boolean) {
    getNegativeMentionsforColumnsResolver(fecha: $fecha, semanal: $semanal) {
        cveCapsula
        titulo
        idSintesis
        sintesis
        testigo {
            url
            medio
        }
    }
  }
`;

export const fetchNegativeMentions = async (fecha: string, token: string, semanal: boolean): Promise<NegativeMentionsResult> => {
    try {
        const { data } = await client.query<NegativeMentionsResponse>({
            query: NEGATIVE_MENTIONS_QUERY,
            variables: { fecha, semanal },
            context: {
                headers: {
                    Authorization: token,
                },
            },
        });
        return data.getNegativeMentionsforColumnsResolver;
    } catch (error: any) {
        console.log(error);
        throw new Error(
            "Ocurrió un error al obtener las menciones negativas. Por favor, inténtalo de nuevo más tarde."
        );
    }
};