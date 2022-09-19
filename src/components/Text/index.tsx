import React from 'react';

import { Container } from './styles';
import type { TextProps } from './types';

export const Text = ({
  tag,
  variant,
  children,
  className,
  ...props
}: TextProps) => (
  <Container as={tag} $variant={variant} className={className} {...props}>
    {children}
  </Container>
);
