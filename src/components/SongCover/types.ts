import { ImageProps } from 'next/image';
import React from 'react';

import { sizes } from './sizes';

export type TIconSizes = keyof typeof sizes;

export interface ISongCoverStyled extends React.ComponentPropsWithRef<'div'> {
  $size?: TIconSizes;
}

export interface ISongCover extends ImageProps {
  songName: string;
  size?: TIconSizes;
}
