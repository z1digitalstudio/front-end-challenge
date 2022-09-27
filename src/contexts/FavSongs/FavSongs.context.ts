import { createContext } from 'react';

import { IFavSongsContext } from './types';

const INITIAL_CONTEXT: IFavSongsContext = {
  favList: [],
  isFav: () => false,
  toggleFav: () => {},
};

export const FavSongsContext = createContext<IFavSongsContext>({
  ...INITIAL_CONTEXT,
});
