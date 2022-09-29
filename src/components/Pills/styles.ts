import styled from 'styled-components';

export const PillContainer = styled.span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 8px 8px 8px;
  background-color: ${({ theme }) => theme.color.malibu100};
  color: ${({ theme }) => theme.color.grayscale900};
  border-radius: 47px;
  text-transform: capitalize;
`;
