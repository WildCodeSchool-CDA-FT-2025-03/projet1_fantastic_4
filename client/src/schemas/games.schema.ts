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
