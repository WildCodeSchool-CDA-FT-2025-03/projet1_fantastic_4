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

export const SET_GAME_FAVORIE = gql`
  mutation AddFavoritesGame(
    $enable: Boolean!
    $slugid: String!
    $userName: String!
  ) {
    addFavoritesGame(enable: $enable, slugid: $slugid, userName: $userName)
  }
`;
