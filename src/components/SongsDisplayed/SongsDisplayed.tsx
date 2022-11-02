import SongElement from '$/components/SongElement';
import { SongsRequest } from '$/utils/hooks/useSongsRequest/types';
import useSongsRequest from '$/utils/hooks/useSongsRequest/useSongsRequest';
import { useMemo } from 'react';

import { DataMemoized, KeyProp, Song } from './types';

export const SongsDisplayed = () => {
  const { data }: SongsRequest = useSongsRequest();

  const dataMemoized: DataMemoized = useMemo(() => data?.songs?.songs, [data]);

  return (
    <>
      {dataMemoized?.map((song: Song, key: KeyProp) => (
        <SongElement
          key={key}
          songImageUrl={song?.image}
          songTitle={song?.name}
          songAuthor={song?.author?.name}
          songDescription={song?.description}
          songGenre={song?.genre}
          songUrl={song?.audio?.url}
        />
      ))}
    </>
  );
};
