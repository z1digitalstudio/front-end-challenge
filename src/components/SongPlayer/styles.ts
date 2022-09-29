import { Text } from '$/components/Text';
import styled from 'styled-components';

export const PlayerPositioner = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.grayscale900};
  box-shadow: 0px -2px 8px rgba(34, 34, 61, 0.1);
  border-radius: 16px 16px 0px 0px;
  padding: 16px 24px;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > * {
    flex: 1;
  }
`;

export const SongInformation = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.white};
`;

export const PlayerControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SongDeails = styled.div`
  padding-left: 1em;
  margin: auto 0;

  & > small {
    color: ${({ theme }) => theme.color.grayscale200};
  }
`;

export const SongCover = styled.div`
  position: relative;
  width: 48px;
  height: 48px;

  & img {
    border-radius: 12px;
  }
`;

export const ProgressTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    flex: 1;
    margin-left: 0.75em;
    margin-right: 0.75em;
  }
`;

export const ProgressTimeText = styled(Text)`
  padding-bottom: 8px;
  color: ${({ theme }) => theme.color.white};
`;
