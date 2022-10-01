import { useState } from 'react';

import { MusicStorageContext } from './MusicStorage.context';
import type {
  TMusicStorageProvider,
  TSelectedSong,
  TStoredSongs,
} from './types';

export const MusicStorageProvider: TMusicStorageProvider = ({ children }) => {
  const [searchValue, handleSearch] = useState<string>('');
  const [selectedSong, setSelectedSong] = useState<TSelectedSong>(null);
  const [storedSongs, setStoredSongs] = useState<TStoredSongs>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <MusicStorageContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        selectedSong,
        setSelectedSong,
        storedSongs,
        setStoredSongs,
        searchValue,
        handleSearch,
      }}
    >
      {children}
    </MusicStorageContext.Provider>
  );
};
