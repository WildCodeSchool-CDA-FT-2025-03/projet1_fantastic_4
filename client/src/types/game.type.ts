export type Game = {
  id: string;
  title: string;
  summary: string;
  releaseDate: number;
  tags: GameTag[];
  originalLanguage: string;
  pegi: string;
  rating: number;
};

export type GameTag = string;
