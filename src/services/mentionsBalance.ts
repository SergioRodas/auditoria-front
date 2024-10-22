import { TotalMentionsResponse } from "../interfaces/MentionsBalance";
import { client, gql } from "./api";

const TOTAL_MENTIONS_COUNT_QUERY = gql`
  query TotalMentionsCount($fecha: String!, $semanal: Boolean) {
    TotalMentionsCountResolver(fecha: $fecha, semanal: $semanal) {
      menciones {
        Actor
        Positivas
        Negativas
        Neutras
        Total
        PorcentajeTotal
        Radio
        Television
        Periodico
      }
      totalMentions {
        TotalRadio
        TotalTelevision
        TotalPeriodico
        TotalMedios
      }
    }
  }
`;

export const fetchTotalMentionsCount = async (fecha: string, token: string, semanal: boolean): Promise<TotalMentionsResponse> => {
  try {
    const { data } = await client.query<TotalMentionsResponse>({
      query: TOTAL_MENTIONS_COUNT_QUERY,
      variables: { fecha, semanal },
      context: {
        headers: {
          Authorization: token,
        },
      },
    });
    return data;
  } catch (error: any) {
    console.error('Error fetching total mentions count:', error);
    throw new Error('Error fetching total mentions count. Please try again later.');
  }
};
