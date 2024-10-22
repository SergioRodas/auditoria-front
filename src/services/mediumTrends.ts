import { MediumTrendsResponse } from "../interfaces/mediumTrends";
import { client, gql } from "./api";

const MEDIUM_TRENDS_QUERY = gql`
  query MediumTrendResolver($fecha: String!, $trend: String!, $semanal: Boolean) {
    MediumTrendResolver(fecha: $fecha, trend: $trend, semanal: $semanal) {
      claudiaSheinbaum {
        radio
        television
        periodico
      }
      xochitlGalvez {
        radio
        television
        periodico
      }
      jorgeAlvarez {
        radio
        television
        periodico
      }
    }
  }
`;

export const fetchMediumTrends = async (fecha: string, trend: string, token: string, semanal: boolean): Promise<MediumTrendsResponse> => {
  try {
    const { data } = await client.query<MediumTrendsResponse>({
      query: MEDIUM_TRENDS_QUERY,
      variables: { fecha, trend, semanal},
      context: {
        headers: {
          Authorization: token,
        },
      },
    });
    return data;
  } catch (error: any) {
    console.error('Error fetching medium trends:', error);
    throw new Error('Error fetching medium trends. Please try again later.');
  }
};
