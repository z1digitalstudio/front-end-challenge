import '$/styles/fonts.css';
import { ApolloInstance } from '$/ApolloInstance';
import { SongPlayer } from '$/components/SongPlayer';
import { Layout } from '$/containers/Layouts';
import { MusicPlayerProvider } from '$/contexts/MusicPlayer/MusicPlayer.provider';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={ApolloInstance}>
          <GlobalStyle />
          <MusicPlayerProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <SongPlayer />
          </MusicPlayerProvider>
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}
