import { Temporal } from 'temporal-polyfill';

export function formatSecondsToMinSec(seconds: number): string {
  let temp = Temporal.Duration.from({ seconds });
  temp = temp.round({ largestUnit: 'minutes' });
  const min = temp.minutes < 10 ? `0${temp.minutes}` : temp.minutes;
  const sec = temp.seconds < 10 ? `0${temp.seconds}` : temp.seconds;
  return `${min}:${sec}`;
}
