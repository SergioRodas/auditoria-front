export interface Mention {
  Actor: string;
  Positivas: number;
  Negativas: number;
  Neutras: number;
  Total: number;
  PorcentajeTotal: number;
  Radio: number;
  Television: number;
  Periodico: number;
}

export interface TotalMentions {
  TotalRadio: number;
  TotalTelevision: number;
  TotalPeriodico: number;
  TotalMedios: number;
}

export interface TotalMentionsResponse {
  TotalMentionsCountResolver: {
    menciones: Mention[];
    totalMentions: TotalMentions;
  };
}

export interface BalanceGraphData {
  name: string;
  Negativas: number;
  Neutras: number;
  Positivas: number;
}
