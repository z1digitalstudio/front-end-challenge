import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

addDecorator((storyFn) => <Wrapper>{storyFn()}</Wrapper>);
