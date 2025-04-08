import { gql } from "@apollo/client";

export const GET_ALL_MOVIES = gql`
  query GetAllMovies {
    getAllMovies {
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
