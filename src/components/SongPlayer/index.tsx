import NextTrack from '$/assets/icons/next-track.svg';
import PrevTrack from '$/assets/icons/prev-track.svg';
import { PlayIcon } from '$/components/AnimatedIcon';
import { Button } from '$/components/Button';
import { RangeInput } from '$/components/RangeInput';
import { SongCover } from '$/components/SongCover';
import { Text } from '$/components/Text';
import { formatSecondsToMinSec } from '$/utils/timeParsers';

import { useSongPlayer } from './logic';
import {
  PlayerContainer,
  PlayerControls,
  PlayerPositioner,
  ProgressTime,
  ProgressTimeText,
  SongDeails,
  SongInformation,
} from './styles';

export const SongPlayer = (): JSX.Element | null => {
  const {
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
  } = useSongPlayer();

  if (!selectedSong) {
    return null;
  }

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
        onLoadedMetadata={handleMetadata}
        onTimeUpdate={handleUpdateCurrentTime}
      />
      <PlayerContainer>
        <SongInformation>
          <SongCover src={image} size="small" songName={name} />
          <SongDeails>
            <Text variant="body2" tag="p" color="white">
              {name}
            </Text>
            <Text variant="caption" tag="small" color="grayscale200">
              {authorName}
            </Text>
          </SongDeails>
        </SongInformation>
        <PlayerControls>
          <Button
            aria-label="previous song"
            disabled={!prevSong}
            onClick={() => setSelectedSong(prevSong)}
          >
            <PrevTrack />
          </Button>
          <Button
            aria-label={isPlaying ? 'pause song' : 'play song'}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <PlayIcon size="large" isChecked={isPlaying} />
          </Button>
          <Button
            aria-label="next song"
            disabled={!nextSong}
            onClick={() => setSelectedSong(nextSong)}
          >
            <NextTrack />
          </Button>
        </PlayerControls>
        <ProgressTime>
          <ProgressTimeText variant="caption" tag="small" color="white">
            {formatSecondsToMinSec(currentTime)}
          </ProgressTimeText>
          <RangeInput
            value={currentTime}
            min={0}
            max={durationTime}
            onChange={handleChangeAudioTime}
            onEnded={() => setIsPlaying(false)}
          />
          <ProgressTimeText variant="caption" tag="small" color="white">
            {formatSecondsToMinSec(durationTime)}
          </ProgressTimeText>
        </ProgressTime>
      </PlayerContainer>
    </PlayerPositioner>
  );
};
