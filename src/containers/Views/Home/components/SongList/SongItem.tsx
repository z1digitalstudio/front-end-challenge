import { PlayIcon } from '$/components/AnimatedIcon';
import { Text } from '$/components/Text';
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
  name,
  description,
  author: { name: authorName },
  image,
  genre,
}: Song) {
  const [isFav, setIsFav] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleFav = () => {
    setIsFav(!isFav);
  };

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
          <Text tag="small" variant="caption">
            {genre}
          </Text>
        </SongDetails>
      </SongInformation>
      <FavIconStyled
        size="medium"
        isChecked={isFav}
        onClick={handleToggleFav}
      />
    </SongContainer>
  );
}
