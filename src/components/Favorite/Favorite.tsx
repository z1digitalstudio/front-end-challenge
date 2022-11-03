import { useMemo, useState } from 'react';

import { FavoriteIconContainer, IconEmpty, IconLiked } from './styles';

export const Favorite = (): JSX.Element => {
  const [isLiked, setIsLiked] = useState(false);
  const handleOnClick = () => (isLiked ? setIsLiked(false) : setIsLiked(true));
  const iconMemoized = useMemo(
    () => (isLiked ? <IconLiked /> : <IconEmpty />),
    [isLiked],
  );
  return (
    <FavoriteIconContainer onClick={handleOnClick}>
      {iconMemoized}
    </FavoriteIconContainer>
  );
};
