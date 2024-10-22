export interface InterviewsResult {
    candidate: string;
    interviews: {
        titulo: string;
        sintesis: string;
        cvcapsula: string;
        id_sintesis: string;
        nombre_testigo: string;
        url: string;
        token?: string;
    }[];
}