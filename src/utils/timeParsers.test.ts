import { formatSecondsToMinSec } from './timeParsers';

describe('formatSecondsToMinSec', () => {
  test('should return 00:00 when parameter second is not provided', () => {
    expect(formatSecondsToMinSec()).toEqual('00:00');
  });
  test('should return seconds formated with zeros (00:03) when parameter second is 3', () => {
    expect(formatSecondsToMinSec(3)).toEqual('00:03');
  });
  test('should return only seconds (00:30) when parameter second is 30', () => {
    expect(formatSecondsToMinSec(30)).toEqual('00:30');
  });
  test('should return minutes and seconds calculated (01:30) when parameter second is 90', () => {
    expect(formatSecondsToMinSec(90)).toEqual('01:30');
  });
  test('should return minutes and seconds calculated when seconds are more than 10 minutes 300', () => {
    expect(formatSecondsToMinSec(630)).toEqual('10:30');
  });
});
