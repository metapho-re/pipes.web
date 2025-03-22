import { Direction } from "./types";

const SCALE_SIZE = 100;
const DIRECTION_CHANGE_THRESHOLD = 5;

export const getNextDirection = (currentDirection: Direction): Direction => {
  const randomNumber = SCALE_SIZE * Math.random();

  switch (currentDirection) {
    case Direction.Up:
    case Direction.Down: {
      if (randomNumber > SCALE_SIZE - DIRECTION_CHANGE_THRESHOLD) {
        return Direction.Left;
      }

      if (randomNumber < DIRECTION_CHANGE_THRESHOLD) {
        return Direction.Right;
      }

      return currentDirection;
    }

    case Direction.Left:
    case Direction.Right: {
      if (randomNumber > SCALE_SIZE - DIRECTION_CHANGE_THRESHOLD) {
        return Direction.Up;
      }

      if (randomNumber < DIRECTION_CHANGE_THRESHOLD) {
        return Direction.Down;
      }

      return currentDirection;
    }
  }
};
