import type {
  TSelectedSong,
  TStoredSongs,
} from '$/contexts/MusicStorage/types';
import { useMusicStorage } from '$/contexts/MusicStorage/useMusicStorage';
import { useEffect, useMemo, useRef, useState } from 'react';

import {
  THandleChangeAudioTime,
  THandleMetadata,
  THandleUpdateCurrentTime,
  TUseSongPlayerReturn,
} from './types';

function playOrStopAudio(audioRef: HTMLAudioElement, isPlaying: boolean): void {
  if (isPlaying) {
    void audioRef.play();
  } else {
    audioRef.pause();
  }
}

function selectSongFromStorage(
  currentSelectedSong: TSelectedSong,
  storedSongs: TStoredSongs,
  modifier: number,
): TSelectedSong {
  if (!currentSelectedSong) {
    return null;
  }

  const newIndex =
    storedSongs.findIndex(({ id }) => currentSelectedSong.id === id) + modifier;
  return storedSongs[newIndex] || null;
}

export const useSongPlayer = (): TUseSongPlayerReturn => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [durationTime, setDurationTime] = useState<number>(0);

  const {
    isPlaying,
    selectedSong,
    setSelectedSong,
    setIsPlaying,
    storedSongs,
  } = useMusicStorage();

  useEffect(() => {
    if (audioRef.current) {
      playOrStopAudio(audioRef.current, isPlaying);
    }
  }, [selectedSong, isPlaying]);

  const nextSong: TSelectedSong = useMemo(
    () => selectSongFromStorage(selectedSong, storedSongs, 1),
    [selectedSong, storedSongs],
  );

  const prevSong: TSelectedSong = useMemo(
    () => selectSongFromStorage(selectedSong, storedSongs, -1),
    [selectedSong, storedSongs],
  );

  const handleMetadata: THandleMetadata = () => {
    if (audioRef.current) {
      setDurationTime(Math.floor(audioRef.current.duration));
    }
  };

  const handleUpdateCurrentTime: THandleUpdateCurrentTime = () => {
    if (audioRef.current) {
      setCurrentTime(Math.floor(audioRef.current.currentTime));
    }
  };

  const handleChangeAudioTime: THandleChangeAudioTime = (e) => {
    const newTime = parseInt(e.target.value);
    if (audioRef.current) {
      setCurrentTime(newTime);
      audioRef.current.currentTime = newTime;
    }
  };

  return {
    audioRef,
    isPlaying,
    selectedSong,
    setIsPlaying,
    currentTime,
    durationTime,
    handleMetadata,
    handleUpdateCurrentTime,
    handleChangeAudioTime,
    setSelectedSong,
    nextSong,
    prevSong,
  };
};
