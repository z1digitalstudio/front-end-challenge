import { Text } from '$/components/Text';
import styled from 'styled-components';

export const PlayerPositioner = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.grayscale900};
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
`;

export const ProgressTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    flex: 1;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
`;

export const ProgressTimeText = styled(Text)`
  width: 3em;
  &:first-child {
    text-align: right;
  }
  &:last-child {
    text-align: left;
  }
`;
