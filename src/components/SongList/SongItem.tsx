import { FavIcon, PlayIcon } from '$/components/AnimatedIcon';
import { Button } from '$/components/Button';
import { Pill } from '$/components/Pills';
import { Text } from '$/components/Text';
import { useFavSongs } from '$/contexts/FavSongs/useFavSongs';
import { useMusicPlayer } from '$/contexts/MusicPlayer/useMusicPlayer';
import type { Song } from '$/types';
import { formatSecondsToMinSec } from '$/utils/timeParsers';
import { useEffect, useState } from 'react';

import {
  SongBody,
  SongContainer,
  SongDescription,
  SongDetails,
  SongImage,
  SongInformation,
} from './styles';

export function SongItem(song: Song) {
  const [duration, setDuration] = useState<number>(0);
  const { isFav, toggleFav } = useFavSongs();
  const { isPlaying, selectedSong, setSelectedSong, setIsPlaying } =
    useMusicPlayer();

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

  return (
    <SongContainer>
      <SongImage
        src={image}
        layout="fill"
        aria-label={`cover-of-${name}`}
        size="medium"
      />
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
            <Button onClick={handlePlay}>
              <PlayIcon size="medium" isChecked={isSelectedAndPlaying} />
            </Button>
            <Text tag="small" variant="caption">
              {formatSecondsToMinSec(duration)}
            </Text>
            <Pill text={genre} />
          </SongDetails>
        </SongInformation>
        <Button onClick={() => toggleFav(id)}>
          <FavIcon size="medium" isChecked={isFav(id)} />
        </Button>
      </SongBody>
    </SongContainer>
  );
}
