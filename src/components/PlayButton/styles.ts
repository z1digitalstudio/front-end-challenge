import styled from 'styled-components';

export const PlayButtonStyle = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.color.grayscale900};
  border-radius: 100%;

  &::after {
    content: '';
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 5px 9px 5px 0px;
    border-color: transparent ${({ theme }) =>
      theme.color.white} transparent transparent;
    display: inline-block;
    vertical-align: middle;
    transform: rotate(180deg);
    margin-left: 14px;
    }
  }
`;
