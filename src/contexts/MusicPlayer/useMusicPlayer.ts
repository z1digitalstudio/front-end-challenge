import { useContext } from 'react';

import { MusicPlayerContext } from './MusicPlayer.context';

export const useMusicPlayer = () => useContext(MusicPlayerContext);
