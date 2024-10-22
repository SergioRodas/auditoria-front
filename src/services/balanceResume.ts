import {client, gql} from "./api";
import {BalanceResumeResults} from "../interfaces/BalanceResume.ts";

interface BalanceResumeResponse {
    getBalanceByFecha: BalanceResumeResults;
}

const BALANCE_RESUME_QUERY = gql`
  query getBalanceByFecha($fecha: String!) {
    getBalanceByFecha(fecha: $fecha) {
     balance
     fecha
    }
  }
`;


export const fetchBalanceResume = async (fecha: string, token: string): Promise<BalanceResumeResults> => {
    try {
        const { data } = await client.query<BalanceResumeResponse>({
            query: BALANCE_RESUME_QUERY,
            variables: { fecha },
            context: {
                headers: {
                    Authorization: token,
                },
            },
        });
        return data.getBalanceByFecha;
    } catch (error: any) {
        console.log(error);
        throw new Error(
            "Ocurrió un error al obtener el balance del día. Por favor, inténtalo de nuevo más tarde."
        );
    }
};