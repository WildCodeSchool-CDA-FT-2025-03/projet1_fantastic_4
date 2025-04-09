import { gql } from "@apollo/client";

export const GET_ALL_MUSICS = gql`
  query GetAllMusics {
    getAllMusics {
      id
      title
      releaseDate
      genre
      category {
        id
        name
      }
    }
  }
`;

export const GET_ALL_NEWIN_MUSICS = gql`
  query GetNewInMusics {
    getNewInMusics {
      id
      title
      releaseDate
      genre
      category {
        id
        name
      }
    }
  }
`;
