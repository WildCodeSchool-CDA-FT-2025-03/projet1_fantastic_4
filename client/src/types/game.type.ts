export type Game = {
  title: string;
  developers: GameDeveloper[];
  originalLanguage: GameOriginalLanguage;
  category: GameCategory;
  coverUrl: string;
  pegi: GamePegi;
  publishers: GamePublisher[];
  releaseDate: number;
  slug: string;
  subtitle: string;
  summary: string;
  tags: GameTag[];
};

export type GameCategory = {
  name: string;
};

export type GameDeveloper = {
  name: string;
};

export type GamePublisher = {
  name: string;
};

export type GameTag = {
  name: string;
};

export type GamePegi = {
  pegi: string;
};

export type GameOriginalLanguage = {
  language: string;
};
