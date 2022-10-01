import styled from 'styled-components';

export const TransparentButton = styled.button`
  background: none;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    color: ${({ theme }) => theme.color.grayscale300};
  }
`;
