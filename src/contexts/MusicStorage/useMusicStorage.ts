import { useFetchSongList } from '$/services/useFetchSongList';
import { useContext, useEffect } from 'react';

import { MusicStorageContext } from './MusicStorage.context';
import { TUseMusicStorage } from './types';

export const useMusicStorage: TUseMusicStorage = () => {
  const { setStoredSongs, searchValue, ...restOfContext } =
    useContext(MusicStorageContext);

  const { data, loading, error } = useFetchSongList({ search: searchValue });

  useEffect(() => {
    const newData = data?.songs.songs || [];
    setStoredSongs(newData);
  }, [data, setStoredSongs]);

  return { ...restOfContext, searchValue, loading, error };
};
