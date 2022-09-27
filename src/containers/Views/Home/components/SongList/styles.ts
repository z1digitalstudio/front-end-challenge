import styled from 'styled-components';

export const SongContainer = styled.article`
  display: flex;
  margin: 2em 0;
`;

export const SongDetails = styled.div`
  display: flex;
  align-items: center;
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
  width: 9em;
  height: 9em;
  & img {
    border-radius: 1em;
  }
`;