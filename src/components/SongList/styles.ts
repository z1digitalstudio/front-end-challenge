import { FavIcon } from '$/components/AnimatedIcon';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const SongContainer = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  ${from['tabletPortrait']} {
    flex-direction: row;
    margin: 2em 0;
    text-align: inherit;
  }
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
  margin: 0 20px;
  max-width: 38em;
  flex: 1;

  & > .description {
    margin-top: 0.25em;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    height: 3.25em;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
