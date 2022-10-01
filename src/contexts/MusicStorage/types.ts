import type { Song } from '$/types';
import { ApolloError } from '@apollo/client';

export type TMusicStorageProvider = React.FunctionComponent<{
  children: React.ReactNode;
}>;

export type TSelectedSong = Song | null;
export type TStoredSongs = Song[];
export type IMusicStorageContext = {
  selectedSong: TSelectedSong;
  setSelectedSong: (selectedSong: TSelectedSong) => void;
  isPlaying: boolean;
  setIsPlaying: (bool: boolean) => void;
  storedSongs: TStoredSongs;
  setStoredSongs: (songs: Song[]) => void;
  handleSearch: (newSearchValue: string) => void;
  searchValue: string;
};

export interface IUseMusicStorageReturn
  extends Omit<IMusicStorageContext, 'setStoredSongs'> {
  loading: boolean;
  error?: ApolloError;
}

export type TUseMusicStorage = () => IUseMusicStorageReturn;
