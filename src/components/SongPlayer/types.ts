import type {
  TSelectedSong,
  TSetIsPlaying,
  TSetSelectedSong,
} from '$/contexts/MusicStorage/types';
import type { RefObject } from 'react';

export type THandleMetadata = React.ReactEventHandler<HTMLAudioElement>;
export type THandleUpdateCurrentTime =
  React.ReactEventHandler<HTMLAudioElement>;
export type THandleChangeAudioTime = (
  e: React.ChangeEvent<HTMLInputElement>,
) => void;

export type TUseSongPlayerReturn = {
  audioRef: RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  selectedSong: TSelectedSong;
  setIsPlaying: TSetIsPlaying;
  currentTime: number;
  durationTime: number;
  setSelectedSong: TSetSelectedSong;
  handleMetadata: THandleMetadata;
  handleUpdateCurrentTime: THandleUpdateCurrentTime;
  handleChangeAudioTime: THandleChangeAudioTime;
  nextSong: TSelectedSong;
  prevSong: TSelectedSong;
};
