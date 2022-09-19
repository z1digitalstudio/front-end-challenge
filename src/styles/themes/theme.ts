import type theme from './';

export type Theme = typeof theme;
export type Colors = keyof typeof theme['color'];

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  // noinspection JSUnusedGlobalSymbols
  export interface DefaultTheme extends Theme {}
}
