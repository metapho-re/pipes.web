export interface Coordinates {
  x: number;
  y: number;
}

export enum Direction {
  Up,
  Down,
  Left,
  Right,
}

export interface UrlParameters {
  pipeCount: number;
  pipeIncrementLength: number;
  pipeLifespan: number;
  pipeRefreshPeriod: number;
  pipeWidth: number;
}
