import { SideMenu as DefaultSideMenu } from '$/components/SideMenu';
import { prettyScrollbar } from '$/styles/utils/mixins';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${from['tabletLandscape']} {
    height: 100vh;
    flex-direction: row;
    position: relative;
  }
`;

export const SideMenu = styled(DefaultSideMenu)`
  flex-shrink: 0;
`;

export const Main = styled.main`
  ${prettyScrollbar({ vertical: true, size: '6px' })}
  display: flex;
  justify-content: center;
  width: 100%;
  padding-inline: 2.5rem;
  overflow: auto;

  ${from['tabletLandscape']} {
    padding-inline: 6rem;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 64rem;
`;
