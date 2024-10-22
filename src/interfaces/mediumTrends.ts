export interface CandidateMediumTrend {
  radio: string[];
  television: string[];
  periodico: string[];
}

export interface MediumTrendsResponse {
  MediumTrendResolver: {
    claudiaSheinbaum: CandidateMediumTrend;
    xochitlGalvez: CandidateMediumTrend;
    jorgeAlvarez: CandidateMediumTrend;
  };
}
