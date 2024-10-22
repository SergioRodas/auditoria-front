import { TopTopicsResult } from "../interfaces/TopTopicsResult";
import { client, gql } from "./api";

interface TopTopicsResponse {
    GeneralTopTopicsResolve: TopTopicsResult;
}

const TOP_TOPICS_QUERY = gql`
  query GeneralTopTopics($fecha: String!, $semanal: Boolean) {
    GeneralTopTopicsResolve(fecha: $fecha, semanal: $semanal) {
      claudiaSheinbaum {
        mentions {
          topic
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
          topic
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
          topic
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

export const fetchTopTopics = async (fecha: string, token: string, semanal: boolean): Promise<TopTopicsResult> => {
    try {
        const { data } = await client.query<TopTopicsResponse>({
            query: TOP_TOPICS_QUERY,
            variables: { fecha, semanal },
            context: {
                headers: {
                    Authorization: token,
                },
            },
        });
        return data.GeneralTopTopicsResolve;
    } catch (error: any) {
        console.log(error);
        throw new Error(
            "Ocurrió un error al obtener los temas principales. Por favor, inténtalo de nuevo más tarde."
        );
    }
};
