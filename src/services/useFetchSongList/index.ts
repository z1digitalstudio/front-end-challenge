import { Song } from '$/types';
import { useQuery } from '@apollo/client';

import { GET_SONGS } from './query';

type Query = {
  search: string;
};

type TData = {
  songs: { songs: Song[] };
};

export const useFetchSongList = (variables: { search: string }) =>
  useQuery<TData, Query>(GET_SONGS, {
    variables,
  });
