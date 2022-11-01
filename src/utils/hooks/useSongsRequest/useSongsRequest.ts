import { gql, useQuery } from '@apollo/client';
import { useMemo } from 'react';

import { SongsRequest } from './types';

const SONGS_QUERY = gql`
  {
    songs {
      songs {
        audio {
          autoPlay
          id
          url
        }
        author {
          description
          id
          name
        }
        description
        genre
        id
        image
        name
      }
    }
  }
`;

const useSongsRequest = () => {
  const { data, loading, error }: SongsRequest = useQuery(SONGS_QUERY);

  const hookObject = useMemo(
    () => ({ data, loading, error }),
    [data, loading, error],
  );
  return hookObject;
};

export default useSongsRequest;
