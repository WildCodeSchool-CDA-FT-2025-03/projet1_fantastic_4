import { gql } from "@apollo/client";

export const GET_ALL_MUSICS = gql`
  query GetAllMusics {
    getAllMusics {
      id
      title
      releaseDate
      genre
      coverUrl
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
      coverUrl
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
      coverUrl
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
