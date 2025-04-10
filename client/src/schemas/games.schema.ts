import { gql } from "@apollo/client";

export const GET_ONE_GAME = gql`
  query GetOneGameBySlug($slug: String!) {
    getOneGameBySlug(slug: $slug) {
      title
      developers {
        name
      }
      originalLanguage {
        language
      }
      category {
        name
      }
      coverUrl
      pegi {
        pegi
      }
      publishers {
        name
      }
      releaseDate
      slug
      subtitle
      summary
      tags {
        name
      }
    }
  }
`;

export const GET_GAMES_CAROUSEL = gql`
  query GetGames($order: GameOrder!, $dir: GameDir!, $limit: Int!) {
    getGames(order: $order, dir: $dir, limit: $limit) {
      slug
      coverUrl
      category {
        name
      }
      title
    }
  }
`;

export const GET_GAMES = gql`
  query GetGames(
    $order: GameOrder!
    $dir: GameDir!
    $limit: Int!
    $page: Int!
  ) {
    getGames(order: $order, dir: $dir, limit: $limit, page: $page) {
      slug
      coverUrl
      category {
        name
      }
      title
    }
  }
`;
