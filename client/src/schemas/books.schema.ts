import { gql } from "@apollo/client";

export const GET_BOOKS_NEW_IN = gql`
  query GetBooksNewIn {
    getBooksNewIn {
      id
      genre
      title
    }
  }
`;

export const GET_BOOKS_RECOMMANDATIONS = gql`
  query GetBooksRecommandations {
    getBooksRecommandations {
      id
      genre
      title
    }
  }
`;
