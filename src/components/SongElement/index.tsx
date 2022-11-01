/* eslint-disable prettier/prettier */
import React from 'react';

import { Container, Thumbnail } from './styles';
import { SongElementProps } from './types';

const SongElement = ({ image }: SongElementProps) => (
  <Container>
    <Thumbnail src={image} />
  </Container>
);

export default SongElement;
