/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: green;
`;

export const Thumbnail = styled.img`
  display: block;
  width: 2rem;
  height: 2rem;

  object-fit: cover;
  overflow: hidden;

  font-size: 0.7rem;

  background-color: ${({ theme }) => theme.color.grayscale100};

  border-radius: 0.375rem;
  margin-inline-end: 0.5rem;
`;
