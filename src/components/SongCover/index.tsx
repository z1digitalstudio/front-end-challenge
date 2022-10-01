import Image from 'next/image';

import { SongCoverStyled } from './styles';
import { ISongCover } from './types';

export const SongCover: React.FC<ISongCover> = ({
  songName,
  size,
  src,
  className,
  ...rest
}) => (
  <SongCoverStyled className={className} $size={size}>
    <Image
      {...rest}
      role="img"
      alt={`cover-of-${songName}`}
      aria-label={`cover-of-${songName}`}
      src={src}
      layout="fill"
      objectFit="cover"
    />
  </SongCoverStyled>
);
