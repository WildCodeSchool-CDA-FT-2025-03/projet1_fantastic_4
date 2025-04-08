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
