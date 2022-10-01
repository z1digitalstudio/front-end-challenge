import { createContext } from 'react';

import type { IMusicStorageContext } from './types';

const INITIAL_CONTEXT: IMusicStorageContext = {
  selectedSong: null,
  setSelectedSong: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
  storedSongs: [],
  setStoredSongs: () => {},
  handleSearch: () => {},
  searchValue: '',
};

export const MusicStorageContext = createContext<IMusicStorageContext>({
  ...INITIAL_CONTEXT,
});
