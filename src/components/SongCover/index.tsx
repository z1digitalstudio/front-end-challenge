import Image from 'next/image';

import { SongCoverStyled } from './styles';
import { ISongCover } from './types';

export const SongCover: React.FC<ISongCover> = ({ size, src }) => (
  <SongCoverStyled $size={size}>
    <Image src={src} layout="fill" />
  </SongCoverStyled>
);
