export interface TendencyStats {
    Positiva: number;
    Neutra: number;
    Negativa: number;
}

export interface MediumFrequency {
    medium: string;
    frequency: number;
    tendencies: TendencyStats;
}

export interface ActorStatsMedium {
    mentions: MediumFrequency[];
    totalPositivas: number;
    totalNeutras: number;
    totalNegativas: number;
    totalTendencies: number;
}

export interface RelevanceResult {
    claudiaSheinbaum: ActorStatsMedium;
    xochitlGalvez: ActorStatsMedium;
    jorgeAlvarez: ActorStatsMedium;
}