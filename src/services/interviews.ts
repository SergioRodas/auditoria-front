import {InterviewsResult} from "../interfaces/InterviewsResult.ts";
import {client, gql} from "./api";

interface InterviewsCandidatesResponse {
    interviewResolver: InterviewsResult;
}

const INTERVIEWS_QUERY = gql`
  query Interviews($fecha: String!, $semanal: Boolean) {
    interviewResolver(fecha: $fecha, semanal: $semanal) {
       candidate
        interviews {
          titulo
          sintesis
          cvcapsula
          id_sintesis
          nombre_testigo
          url
        }
    }
  }
`;

export const fetchInterviews = async (fecha: string, token: string, semanal: boolean): Promise<InterviewsResult> => {
    try {
        const { data } = await client.query<InterviewsCandidatesResponse>({
            query: INTERVIEWS_QUERY,
            variables: { fecha, semanal },
            context: {
                headers: {
                    Authorization: token,
                },
            },
        });
        return data.interviewResolver;
    } catch (error: any) {
        console.log(error);
        throw new Error(
            "Ocurrió un error al obtener las entrevistas. Por favor, inténtalo de nuevo más tarde."
        );
    }
};