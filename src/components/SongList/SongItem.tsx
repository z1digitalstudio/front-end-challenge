import { PlayIcon } from '$/components/AnimatedIcon';
import { Pill } from '$/components/Pills';
import { Text } from '$/components/Text';
import { SongCover } from '$/components/SongCover';
import { useFavSongs } from '$/contexts/FavSongs/useFavSongs';
import { useMusicPlayer } from '$/contexts/MusicPlayer/useMusicPlayer';
import type { Song } from '$/types';

import {
  FavIconStyled,
  SongContainer,
  SongDetails,
  SongInformation,
} from './styles';

export function SongItem(song: Song) {
  const { isFav, toggleFav } = useFavSongs();
  const { isPlaying, selectedSong, setSelectedSong, setIsPlaying } =
    useMusicPlayer();

  const {
    id,
    name,
    description,
    author: { name: authorName },
    image,
    genre,
  } = song;

  const isSelectedAndPlaying = selectedSong?.id === song.id && isPlaying;

  const handlePlay = () => {
    setSelectedSong(song);
    setIsPlaying(!isSelectedAndPlaying);
  };

  return (
    <SongContainer>
      <SongCover
        src={image}
        layout="fill"
        alt={`cover-of-${name}`}
        size="medium"
      />
      <SongInformation>
        <Text tag="h3" variant="bodyBold">
          {name}
        </Text>
        <Text tag="h4" variant="body">
          {authorName}
        </Text>
        <Text tag="p" variant="body2" className="description">
          {description}
        </Text>
        <SongDetails>
          <PlayIcon
            size="medium"
            isChecked={isSelectedAndPlaying}
            onClick={handlePlay}
          />
          <Text tag="small" variant="caption">
            5 min
          </Text>
          <Pill text={genre} />
        </SongDetails>
      </SongInformation>
      <FavIconStyled
        size="medium"
        isChecked={isFav(id)}
        onClick={() => toggleFav(id)}
      />
    </SongContainer>
  );
}
