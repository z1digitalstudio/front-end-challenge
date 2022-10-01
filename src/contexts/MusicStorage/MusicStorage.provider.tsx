import { useState } from 'react';

import { MusicStorageContext } from './MusicStorage.context';
import type { TMusicStorageProvider, TSelectedSong } from './types';

export const MusicStorageProvider: TMusicStorageProvider = ({ children }) => {
  const [selectedSong, setSelectedSong] = useState<TSelectedSong>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <MusicStorageContext.Provider
      value={{ isPlaying, setIsPlaying, selectedSong, setSelectedSong }}
    >
      {children}
    </MusicStorageContext.Provider>
  );
};
