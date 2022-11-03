import { RiHeartAddLine, RiHeartFill } from 'react-icons/ri';
import styled from 'styled-components';

export const FavoriteIconContainer = styled.div`
  width: 19.2px;
  height: 18.48px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const IconEmpty = styled(RiHeartAddLine)`
  transform: scale(1.5);
  color: ${({ theme }) => theme.color.favoriteIconEmpty};
`;
export const IconLiked = styled(RiHeartFill)`
  transform: scale(1.5);
  color: ${({ theme }) => theme.color.favoriteIconLiked};
`;
