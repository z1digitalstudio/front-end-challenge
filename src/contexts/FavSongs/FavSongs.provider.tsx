import { FAV_KEY_LOCAL_STORAGE } from '$/globals/constants/localStorageKeys';
import { useEffect, useState } from 'react';

import { FavSongsContext } from './FavSongs.context';
import { TFavList, TFavSongsProvider, TIsFav, TToggleFav } from './types';

export const FavSongsProvider: TFavSongsProvider = ({ children }) => {
  const [favList, setFavList] = useState<TFavList>([]);

  useEffect(() => {
    try {
      const items = window.localStorage.getItem(FAV_KEY_LOCAL_STORAGE);
      const storedValue = items ? (JSON.parse(items) as TFavList) : [];
      setFavList(storedValue);
    } catch (error) {
      throw error;
    }
  }, []);

  const isFav: TIsFav = (id) => favList.includes(id);
  const toggleFav: TToggleFav = (id) => {
    const newList = isFav(id)
      ? favList.filter((savedId) => savedId !== id)
      : [...favList, id];
    setFavList(newList);
    window.localStorage.setItem(FAV_KEY_LOCAL_STORAGE, JSON.stringify(newList));
  };

  return (
    <FavSongsContext.Provider value={{ isFav, toggleFav, favList }}>
      {children}
    </FavSongsContext.Provider>
  );
};
