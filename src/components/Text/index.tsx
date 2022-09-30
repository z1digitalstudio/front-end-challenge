import React from 'react';

import { Container } from './styles';
import type { TextProps } from './types';

export const Text = ({
  tag,
  variant,
  children,
  className,
  color = 'grayscale900',
  ...props
}: TextProps) => (
  <Container
    $color={color}
    as={tag}
    $variant={variant}
    className={className}
    {...props}
  >
    {children}
  </Container>
);
