/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  width: 100%;
  height: 140px;
  gap: 20px;
`;

export const Thumbnail = styled.div`
  width: 140px;
  height: 140px;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.color.grayscale100};
  border-radius: 0.375rem;
`;

export const SongInfo = styled.div`
  width: 603px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SongTitle = styled.h3`
  line-height: 24px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.color.grayscale900};
`;
export const SongAuthor = styled.h4`
  line-height: 20px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.color.grayscale700};
`;

export const SongDescription = styled.p`
  width: 100%;
  height: 40px;

  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.color.grayscale700};
  font-size: 14px;
  display: -webkit-box;
  max-width: 603px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SongInfoFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
export const SongPlay = styled.div`
  & > svg {
    width: 32px;
    height: 32px;

    &:hover {
      cursor: pointer;
    }
  }
`;
export const SongDuration = styled.p`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.color.grayscale700};
  margin-top: -9px;
  display: inline-block;
`;

export const SongGenreWrapper = styled.div`
  height: 20px;
  width: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #e1f4fb;
  border-radius: 47px;
  padding: 4px 8px;
`;

export const SongGenre = styled.p`
  line-height: 12px;
  height: 12px;
  font-size: 12px;
  text-transform: lowercase;
  margin-top: -5px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const SongLikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 140px;
  margin-left: auto;
`;
