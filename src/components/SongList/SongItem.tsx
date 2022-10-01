import { FavIcon, PlayIcon } from '$/components/AnimatedIcon';
import { Button } from '$/components/Button';
import { Pill } from '$/components/Pills';
import { Text } from '$/components/Text';
import { useFavSongs } from '$/contexts/FavSongs/useFavSongs';
import { useMusicStorage } from '$/contexts/MusicStorage/useMusicStorage';
import type { Song } from '$/types';
import { formatSecondsToMinSec } from '$/utils/timeParsers';
import { useEffect, useState } from 'react';

import {
  SongBody,
  SongContainer,
  SongCover,
  SongDescription,
  SongDetails,
  SongInformation,
} from './styles';

export function SongItem(song: Song) {
  const [duration, setDuration] = useState<number>(0);
  const { isFav, toggleFav } = useFavSongs();
  const { isPlaying, selectedSong, setSelectedSong, setIsPlaying } =
    useMusicStorage();

  const {
    id,
    name,
    audio: { url },
    description,
    author: { name: authorName },
    image,
    genre,
  } = song;

  const isSelectedAndPlaying = selectedSong?.id === song.id && isPlaying;

  useEffect(() => {
    const audio = new Audio(url);
    audio.onloadedmetadata = () => setDuration(Math.floor(audio.duration));
  }, [url]);

  const handlePlay = () => {
    setSelectedSong(song);
    setIsPlaying(!isSelectedAndPlaying);
  };

  const isFavSong = isFav(id);
  return (
    <SongContainer>
      <SongCover songName={name} src={image} size="medium" />
      <SongBody>
        <SongInformation>
          <Text tag="h3" variant="bodyBold">
            {name}
          </Text>
          <Text tag="h4" variant="body">
            {authorName}
          </Text>
          <SongDescription tag="p" variant="body2" className="description">
            {description}
          </SongDescription>
          <SongDetails>
            <Button
              aria-label={isPlaying ? 'pause song' : 'play song'}
              onClick={handlePlay}
            >
              <PlayIcon size="medium" isChecked={isSelectedAndPlaying} />
            </Button>
            <Text tag="small" variant="caption">
              {formatSecondsToMinSec(duration)}
            </Text>
            <Pill text={genre} />
          </SongDetails>
        </SongInformation>
        <Button
          aria-label={
            isFavSong ? 'remove from favorite songs' : 'add to favorite songs'
          }
          onClick={() => toggleFav(id)}
        >
          <FavIcon size="medium" isChecked={isFavSong} />
        </Button>
      </SongBody>
    </SongContainer>
  );
}
