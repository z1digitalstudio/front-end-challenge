import type { Song } from '$/types';

export type TMusicPlayerProvider = React.FunctionComponent<{
  children: React.ReactNode;
}>;

export type TSelectedSong = Song | null;

export type IMusicPlayerContext = {
  selectedSong: TSelectedSong;
  setSelectedSong: (selectedSong: TSelectedSong) => void;
  isPlaying: boolean;
  setIsPlaying: (bool: boolean) => void;
};
