export interface Testigo {
    url: string;
    medio: string;
}

export interface NegativeMentionsResult {
    mentions: {
        cveCapsula: string;
        titulo: string;
        idSintesis: string;
        sintesis: string;
        testigo: Testigo[];
    }[];
}