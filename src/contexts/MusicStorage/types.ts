import type { Song } from '$/types';

export type TMusicStorageProvider = React.FunctionComponent<{
  children: React.ReactNode;
}>;

export type TSelectedSong = Song | null;

export type IMusicStorageContext = {
  selectedSong: TSelectedSong;
  setSelectedSong: (selectedSong: TSelectedSong) => void;
  isPlaying: boolean;
  setIsPlaying: (bool: boolean) => void;
};
