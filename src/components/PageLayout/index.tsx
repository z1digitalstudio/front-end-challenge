import React from 'react';

import { Container, ContentWrapper, Main, SideMenu } from './styles';
import { PageLayoutProps } from './types';

export const PageLayout = ({ children }: PageLayoutProps) => (
  <Container>
    <SideMenu />
    <Main>
      <ContentWrapper>{children}</ContentWrapper>
    </Main>
  </Container>
);
