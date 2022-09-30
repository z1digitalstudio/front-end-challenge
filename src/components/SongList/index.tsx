import type { Song } from '$/types';

import { SongItem } from './SongItem';

type Props = {
  error: unknown;
  loading: boolean;
  songs: Song[] | undefined;
};

export function SongList({ error, loading, songs }: Props) {
  if (error) {
    return <p>An unexpected error has occurred</p>;
  }

  if (loading) {
    return <p>Is Loding...</p>;
  }

  if (!songs?.length) {
    return <p>No songs found</p>;
  }

  return (
    <>
      {songs.map((song: Song) => (
        <SongItem {...song} key={song.id} />
      ))}
    </>
  );
}
