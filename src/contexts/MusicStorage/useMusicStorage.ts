import { useContext } from 'react';

import { MusicStorageContext } from './MusicStorage.context';

export const useMusicStorage = () => useContext(MusicStorageContext);
