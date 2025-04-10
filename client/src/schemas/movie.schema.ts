import { gql } from "@apollo/client";

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

export const GET_ONE_MOVIE = gql`
  query GetOneMovieById($id: String!) {
    getOneMovieById(id: $id) {
      id
      title
      genre
      summary
      category {
        name
      }
    }
  }
`;
