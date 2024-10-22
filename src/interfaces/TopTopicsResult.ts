export interface Tendencies {
  Positiva: number;
  Neutra: number;
  Negativa: number;
}

export interface Topic {
  topic: string;
  frequency: number;
  tendencies: Tendencies;
}

export interface TopicStats extends Tendencies {
  mentions: Topic[];
}

export interface TopTopicsResult {
  claudiaSheinbaum: TopicStats;
  xochitlGalvez: TopicStats;
  jorgeAlvarez: TopicStats;
}
