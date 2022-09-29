import { useState } from 'react';

import { MusicPlayerContext } from './MusicPlayer.context';
import type { TMusicPlayerProvider, TSelectedSong } from './types';

export const MusicPlayerProvider: TMusicPlayerProvider = ({ children }) => {
  const [selectedSong, setSelectedSong] = useState<TSelectedSong>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <MusicPlayerContext.Provider
      value={{ isPlaying, setIsPlaying, selectedSong, setSelectedSong }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
