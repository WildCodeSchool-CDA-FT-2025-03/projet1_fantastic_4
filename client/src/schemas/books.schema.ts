import { gql } from "@apollo/client";

export const GET_BOOKS_NEW_IN = gql`
  query GetBooksNewIn {
    getBooksNewIn {
      id
      genre
      title
      categoryId
      category {
        id
        name
      }
    }
  }
`;

export const GET_BOOKS_RECOMMANDATIONS = gql`
  query GetBooksRecommandations {
    getBooksRecommandations {
      id
      genre
      title
      categoryId
      category {
        id
        name
      }
    }
  }
`;

export const GET_ONE_BOOK = gql`
  query GetOneBookById($id: String!) {
    getOneBookById(id: $id) {
      id
      title
      genre
      publisher
      synopsis
    }
  }
`;
