import type { Song } from '$/types';

import { SongItem } from './SongItem';
import { SongListContainer } from './styles';

type Props = {
  error: unknown;
  loading: boolean;
  songs: Song[] | undefined;
};

export function SongList({ error, loading, songs }: Props): JSX.Element {
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
    <SongListContainer>
      {songs.map((song: Song) => (
        <SongItem {...song} key={song.id} />
      ))}
    </SongListContainer>
  );
}
