import { useContext } from 'react';

import { FavSongsContext } from './FavSongs.context';

export const useFavSongs = () => useContext(FavSongsContext);
