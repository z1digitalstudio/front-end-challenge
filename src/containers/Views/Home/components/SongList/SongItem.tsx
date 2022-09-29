import { PlayIcon } from '$/components/AnimatedIcon';
import { Pill } from '$/components/Pills';
import { Text } from '$/components/Text';
import { useFavSongs } from '$/contexts/FavSongs/useFavSongs';
import type { Song } from '$/types';
import Image from 'next/image';
import { useState } from 'react';

import {
  FavIconStyled,
  SongContainer,
  SongCover,
  SongDetails,
  SongInformation,
} from './styles';

export function SongItem({
  id,
  name,
  description,
  author: { name: authorName },
  image,
  genre,
}: Song) {
  // const { isFav, toggleFav } = useFavoriteList();
  const { isFav, toggleFav } = useFavSongs();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <SongContainer>
      <SongCover>
        <Image src={image} layout="fill" alt={`cover-of-${name}`} />
      </SongCover>
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
          <PlayIcon size="medium" isChecked={isPlaying} onClick={handlePlay} />
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
