import { FavIcon } from '$/components/AnimatedIcon';
import styled from 'styled-components';

export const SongContainer = styled.article`
  display: flex;
  margin: 2em 0;
`;

export const SongDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & > * {
    margin-right: 1em;
  }
`;

export const FavIconStyled = styled(FavIcon)`
  margin: auto 0 auto auto;
`;

export const SongInformation = styled.div`
  margin: 0 1.2em;
  max-width: 38em;
  flex: 1;

  & > .description {
    margin-top: 0.25em;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    height: 3.5em;
    word-break: break-word;
  }
`;

export const SongCover = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  & img {
    border-radius: 1em;
  }
`;
