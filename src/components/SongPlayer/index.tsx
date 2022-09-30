import NextTrack from '$/assets/icons/next-track.svg';
import PrevTrack from '$/assets/icons/prev-track.svg';
import { PlayIcon } from '$/components/AnimatedIcon';
import { RangeInput } from '$/components/RangeInput';
import { SongCover } from '$/components/SongCover';
import { Text } from '$/components/Text';
import { useMusicPlayer } from '$/contexts/MusicPlayer/useMusicPlayer';
import { formatSecondsToMinSec } from '$/utils/timeParsers';
import React, { useEffect, useRef, useState } from 'react';

import {
  PlayerContainer,
  PlayerControls,
  PlayerPositioner,
  ProgressTime,
  ProgressTimeText,
  SongDeails,
  SongInformation,
} from './styles';

function playOrStopAudio(audioRef: HTMLAudioElement, isPlaying: boolean): void {
  if (isPlaying) {
    void audioRef.play();
  } else {
    audioRef.pause();
  }
}

// TODO: extract null render and pass props from useMusicPlayer. Not use hook inside component
// TODO: extract login in a hook

export const SongPlayer = (): JSX.Element | null => {
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
          <SongCover src={image} alt={`cover-of-${name}`} size="small" />
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
            {formatSecondsToMinSec(currentTime)}
          </ProgressTimeText>
          <RangeInput
            value={currentTime}
            min={0}
            max={durationTime}
            onChange={handleChangeAudioTime}
            onEnded={() => setIsPlaying(false)}
          />
          <ProgressTimeText variant="caption" tag="small">
            {formatSecondsToMinSec(durationTime)}
          </ProgressTimeText>
        </ProgressTime>
      </PlayerContainer>
    </PlayerPositioner>
  );
};
