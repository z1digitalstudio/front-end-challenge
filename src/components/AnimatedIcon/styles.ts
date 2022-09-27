import { iconSizes } from '$/styles/themes/iconSizes';
import styled from 'styled-components';

import type { IAnimationWrapper } from './types';

export const AnimationWrapper = styled.div<IAnimationWrapper>`
  ${({ $size = 'medium' }) => iconSizes[$size]};
`;
