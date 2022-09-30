import styled from 'styled-components';

import { sizes } from './sizes';
import { ISongCoverStyled } from './types';

export const SongCoverStyled = styled.div<ISongCoverStyled>`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  ${({ $size = 'medium' }) => sizes[$size]};
`;
