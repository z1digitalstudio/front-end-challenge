import NextTrack from '$/assets/icons/next-track.svg';
import PrevTrack from '$/assets/icons/prev-track.svg';
import { PlayIcon } from '$/components/AnimatedIcon';
import { Text } from '$/components/Text';
import { useMusicPlayer } from '$/contexts/MusicPlayer/useMusicPlayer';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Temporal } from 'temporal-polyfill';

import {
  PlayerContainer,
  PlayerControls,
  PlayerPositioner,
  ProgressTime,
  ProgressTimeText,
  SongCover,
  SongDeails,
  SongInformation,
} from './styles';

function formatDuration(duration: number): string {
  let temp = Temporal.Duration.from({ seconds: duration });
  temp = temp.round({ largestUnit: 'minutes' });
  const minutes = temp.minutes < 10 ? `0${temp.minutes}` : temp.minutes;
  const seconds = temp.seconds < 10 ? `0${temp.seconds}` : temp.seconds;
  return `${minutes}:${seconds}`;
}

function playOrStopAudio(audioRef: HTMLAudioElement, isPlaying: boolean): void {
  if (isPlaying) {
    void audioRef.play();
  } else {
    audioRef.pause();
  }
}

// TODO: extract null render and pass props from useMusicPlayer. Not use hook inside component
// TODO: extract login in a hook

export const SongPlayer = () => {
  const { isPlaying, selectedSong, setIsPlaying } = useMusicPlayer();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [durationTime, setDurationTime] = useState<number>(0);

  const handleMetadata: React.ReactEventHandler<HTMLAudioElement> = () => {
    if (audioRef.current) {
      setDurationTime(Math.floor(audioRef.current.duration));
    }
  };

  const handleUpdateCurrentTime: React.ReactEventHandler<
    HTMLAudioElement
  > = () => {
    if (audioRef.current) {
      setCurrentTime(Math.floor(audioRef.current.currentTime));
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      playOrStopAudio(audioRef.current, isPlaying);
    }
  }, [selectedSong, isPlaying]);

  if (!selectedSong) {
    return null;
  }

  const handleChangeAudioTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseInt(e.target.value);
    if (audioRef.current) {
      setCurrentTime(newTime);
      audioRef.current.currentTime = newTime;
    }
  };

  const {
    audio: { url },
    name,
    author: { name: authorName },
    image,
  } = selectedSong;

  return (
    <PlayerPositioner>
      <audio
        ref={audioRef}
        src={url}
        onEnded={() => setIsPlaying(false)}
        onLoadedData={handleMetadata}
        onTimeUpdate={handleUpdateCurrentTime}
      />
      <PlayerContainer>
        <SongInformation>
          <SongCover>
            <Image src={image} layout="fill" alt={`cover-of-${name}`} />
          </SongCover>
          <SongDeails>
            <Text variant="body2" tag="p">
              {name}
            </Text>
            <Text variant="caption" tag="small">
              {authorName}
            </Text>
          </SongDeails>
        </SongInformation>
        <PlayerControls>
          <PrevTrack />
          <PlayIcon
            size="large"
            isChecked={isPlaying}
            onClick={() => setIsPlaying(!isPlaying)}
          />
          <NextTrack />
        </PlayerControls>
        <ProgressTime>
          <ProgressTimeText variant="caption" tag="small">
            {formatDuration(currentTime)}
          </ProgressTimeText>
          <input
            type="range"
            defaultValue="0"
            value={currentTime}
            max={durationTime}
            onChange={handleChangeAudioTime}
            onEnded={() => setIsPlaying(false)}
          />
          <ProgressTimeText variant="caption" tag="small">
            {formatDuration(durationTime)}
          </ProgressTimeText>
        </ProgressTime>
      </PlayerContainer>
    </PlayerPositioner>
  );
};
