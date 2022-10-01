import { GET_SONGS } from '$/queries';
import { Song } from '$/types';
import { useQuery } from '@apollo/client';
import { useContext, useEffect } from 'react';

import { MusicStorageContext } from './MusicStorage.context';
import { TUseMusicStorage } from './types';

type Query = {
  search: string;
};

type Data = {
  songs: { songs: Song[] };
};

export const useMusicStorage: TUseMusicStorage = () => {
  const { setStoredSongs, searchValue, ...restOfContext } =
    useContext(MusicStorageContext);

  //todo: useFetchSongList as a Service
  const { loading, error, data } = useQuery<Data, Query>(GET_SONGS, {
    variables: { search: searchValue },
  });

  useEffect(() => {
    const newData = data?.songs.songs || [];
    setStoredSongs(newData);
  }, [data, setStoredSongs]);

  return { ...restOfContext, searchValue, loading, error };
};
