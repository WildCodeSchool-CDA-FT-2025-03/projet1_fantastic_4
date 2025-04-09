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
