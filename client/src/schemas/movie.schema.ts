import { gql } from "@apollo/client";

export const GET_ALL_MOVIES_GENRES = gql`
  query GetAllMoviesGenres {
    getAllMoviesGenres {
      id
      name
    }
  }
`;

export const GET_MOVIES_NEW_IN = gql`
  query GetMoviesNewIn {
    getMoviesNewIn {
      categoryId
      genre
      id
      title
      category {
        id
        name
      }
    }
  }
`;

export const GET_MOVIES_RECOMMANDATIONS = gql`
  query GetMoviesRecommandations {
    getMoviesRecommandations {
      categoryId
      genre
      id
      title
      category {
        id
        name
      }
    }
  }
`;

export const GET_MOVIES_BY_GENRE = gql`
  query GetMoviesByGenre($genreName: String) {
    getMoviesByGenre(genreName: $genreName) {
      categoryId
      genre
      id
      title
      category {
        id
        name
      }
    }
  }
`;
