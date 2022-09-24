import { PlayButton } from '$/components/PlayButton';
import { Text } from '$/components/Text';
import type { Song } from '$/types';
import Image from 'next/image';

import {
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
  const playSong = () => {};

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
          <PlayButton onClick={playSong} />
          <Text tag="small" variant="caption">
            5 min
          </Text>
          <Text tag="small" variant="caption">
            {genre}
          </Text>
        </SongDetails>
      </SongInformation>
    </SongContainer>
  );
}
