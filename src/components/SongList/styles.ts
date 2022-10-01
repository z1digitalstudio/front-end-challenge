import { SongCover as DefaultSongCover } from '$/components/SongCover';
import { Text } from '$/components/Text';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const SongListContainer = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
`;

export const SongContainer = styled.li`
  display: flex;
  flex-flow: column wrap;
  margin: 1rem 0rem;

  ${from['mobile']} {
    flex-direction: row;
  }
`;

export const SongBody = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  min-width: 300px;
  margin-bottom: 1rem;

  & > button:last-child {
    margin: auto 0 auto auto;
  }
`;

export const SongInformation = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  flex: 1;
  max-width: 603px;
  margin-right: 1rem;
`;

export const SongDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > *:not(:first-child) {
    margin-left: 0.35em;
  }

  > *:not(:last-child) {
    margin-right: 0.35em;
  }
`;

export const SongDescription = styled(Text)`
  margin-top: 0.25em;
  margin-bottom: 0.25em;

  ${from['mobile']} {
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const SongCover = styled(DefaultSongCover)`
  margin-bottom: 0.35rem;
  margin-right: 1rem;
`;
