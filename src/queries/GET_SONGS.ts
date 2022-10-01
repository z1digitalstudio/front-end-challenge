import { gql } from '@apollo/client';

export const GET_SONGS = gql`
  query Songs($search: String!) {
    songs(search: $search, sort: { order: ASC, key: "name" }) {
      songs {
        id
        author {
          name
        }
        audio {
          url
        }
        description
        name
        image
        genre
      }
    }
  }
`;
