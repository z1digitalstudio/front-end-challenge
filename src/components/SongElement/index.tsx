/* eslint-disable prettier/prettier */
import { Favorite } from '$/components/Favorite/Favorite';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

import {
  Container,
  SongAuthor,
  SongDescription,
  SongDuration,
  SongGenre,
  SongGenreWrapper,
  SongInfo,
  SongInfoFooter,
  SongLikeContainer,
  SongPlay,
  SongTitle,
  Thumbnail,
} from './styles';
import { SongElementProps } from './types';

const SongElement = ({
  songImageUrl,
  songUrl,
  songTitle,
  songAuthor,
  songDescription,
  songGenre,
}: SongElementProps) => {
  const songGenreFormatted = useMemo(() => {
    const stringHasCharacter = songGenre.indexOf('_') !== -1;
    const stringformatted = stringHasCharacter
      ? songGenre.replace(/_/g, ' ')
      : songGenre;
    return stringformatted;
  }, [songGenre]);
  return (
    <Container>
      <audio src={songUrl} />
      <Thumbnail>
        <Image
          loader={() => songImageUrl}
          src={songImageUrl}
          width={140}
          height={140}
          objectFit="fill"
          alt={`Song thumbnail`}
        />
      </Thumbnail>
      <SongInfo>
        <SongTitle>{songTitle}</SongTitle>
        <SongAuthor>{songAuthor}</SongAuthor>

        <SongDescription>{songDescription}</SongDescription>

        <SongInfoFooter>
          <SongPlay>
            <AiFillPlayCircle />
          </SongPlay>

          <SongDuration>5 min</SongDuration>

          <SongGenreWrapper>
            <SongGenre>{songGenreFormatted}</SongGenre>
          </SongGenreWrapper>
        </SongInfoFooter>
      </SongInfo>
      <SongLikeContainer>
        <Favorite />
      </SongLikeContainer>
    </Container>
  );
};

export default SongElement;
