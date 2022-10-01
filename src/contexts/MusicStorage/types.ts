import type { Song } from '$/types';
import { ApolloError } from '@apollo/client';

export type TMusicStorageProvider = React.FunctionComponent<{
  children: React.ReactNode;
}>;

export type TSelectedSong = Song | null;
export type TStoredSongs = Song[];
export type TSetSelectedSong = (selectedSong: TSelectedSong) => void;
export type TSetIsPlaying = (bool: boolean) => void;
export type THandleSearch = (newSearchValue: string) => void;

export type IMusicStorageContext = {
  storedSongs: TStoredSongs;
  selectedSong: TSelectedSong;
  isPlaying: boolean;
  searchValue: string;
  setStoredSongs: (songs: Song[]) => void;
  setSelectedSong: TSetSelectedSong;
  setIsPlaying: TSetIsPlaying;
  handleSearch: THandleSearch;
};

export interface IUseMusicStorageReturn
  extends Omit<IMusicStorageContext, 'setStoredSongs'> {
  loading: boolean;
  error?: ApolloError;
}

export type TUseMusicStorage = () => IUseMusicStorageReturn;
