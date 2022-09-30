import { Temporal } from 'temporal-polyfill';

export function formatSecondsToMinSec(seconds?: number): string {
  let min = '00';
  let sec = '00';

  if (seconds) {
    let temp = Temporal.Duration.from({ seconds });
    temp = temp.round({ largestUnit: 'minutes' });
    min = temp.minutes < 10 ? `0${temp.minutes}` : `${temp.minutes}`;
    sec = temp.seconds < 10 ? `0${temp.seconds}` : `${temp.seconds}`;
  }
  return `${min}:${sec}`;
}
