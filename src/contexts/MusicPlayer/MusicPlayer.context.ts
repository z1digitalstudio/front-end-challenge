import { createContext } from 'react';

import type { IMusicPlayerContext } from './types';

const INITIAL_CONTEXT: IMusicPlayerContext = {
  selectedSong: null,
  setSelectedSong: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
};

export const MusicPlayerContext = createContext<IMusicPlayerContext>({
  ...INITIAL_CONTEXT,
});
