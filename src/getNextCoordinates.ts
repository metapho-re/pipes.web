import { getWrappedCoordinates } from "./getWrappedCoordinates";
import { Coordinates, Direction, UrlParameters } from "./types";

interface Parameters {
  coordinates: Coordinates;
  direction: Direction;
  pipeIncrementLength: UrlParameters["pipeIncrementLength"];
}

export const getNextCoordinates = ({
  coordinates,
  direction,
  pipeIncrementLength,
}: Parameters): Coordinates => {
  const coordinatesUpdate = (function () {
    switch (direction) {
      case Direction.Up:
        return { y: coordinates.y - pipeIncrementLength };
      case Direction.Down:
        return { y: coordinates.y + pipeIncrementLength };
      case Direction.Left:
        return { x: coordinates.x - pipeIncrementLength };
      case Direction.Right:
        return { x: coordinates.x + pipeIncrementLength };
      default:
        return {};
    }
  })();

  return getWrappedCoordinates({ ...coordinates, ...coordinatesUpdate });
};
