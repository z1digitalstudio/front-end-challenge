import { Text } from '$/components/Text';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const PlayerPositioner = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.grayscale900};
  border-radius: 16px 16px 0px 0px;
  padding: 16px 24px;
  z-index: 1;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const SongInformation = styled.div`
  display: flex;
  flex: 1;
  color: ${({ theme }) => theme.color.white};
`;

export const PlayerControls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  ${from['tabletLandscape']} {
    justify-content: center;
  }

  & > * {
    &:not(:first-child) {
      margin-left: 0.75rem;
    }
    &:not(:last-child) {
      margin-right: 0.75rem;
    }
  }
`;

export const SongDeails = styled.div`
  padding-left: 1rem;
  margin: auto 0;
`;

export const ProgressTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  width: 100%;
  min-width: 300px;
  flex: none;

  ${from['tabletLandscape']} {
    flex: 1;
    margin-top: 0;
  }

  & > input {
    flex: 1;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const ProgressTimeText = styled(Text)`
  width: 3rem;
  &:first-child {
    text-align: right;
  }
  &:last-child {
    text-align: left;
  }
`;
