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

export const GET_ONE_MUSIC = gql`
  query getOneMusic($id: String!) {
    getOneMusic(id: $id) {
      id
      title
      releaseDate
      genre
      summery
      category {
        id
        name
      }
      tracklist {
        title
        duration
      }
    }
  }
`;
