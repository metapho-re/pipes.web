import { drawCircle } from "./drawCircle";
import { drawLine } from "./drawLine";
import { getNextCoordinates } from "./getNextCoordinates";
import { getNextDirection } from "./getNextDirection";
import { getRandomColor } from "./getRandomColor";
import { canvas } from "./queries";
import { Coordinates, Direction, UrlParameters } from "./types";

interface Parameters {
  pipeIncrementLength: UrlParameters["pipeIncrementLength"];
  pipeLifespan: UrlParameters["pipeLifespan"];
  pipeRefreshPeriod: UrlParameters["pipeRefreshPeriod"];
  pipeWidth: UrlParameters["pipeWidth"];
}

export const drawPipe = async ({
  pipeIncrementLength,
  pipeLifespan,
  pipeRefreshPeriod,
  pipeWidth,
}: Parameters): Promise<void> => {
  const color = getRandomColor(Math.random());

  let currentCoordinates: Coordinates = {
    x: Math.floor(canvas.width * Math.random()),
    y: Math.floor(canvas.height * Math.random()),
  };
  let currentDirection: Direction = Math.floor(
    (Object.keys(Direction).length / 2) * Math.random()
  );
  let counter = pipeLifespan;

  while (counter >= 0) {
    const nextCoordinates = getNextCoordinates({
      coordinates: currentCoordinates,
      direction: currentDirection,
      pipeIncrementLength,
    });
    const nextDirection = getNextDirection(currentDirection);

    if (
      Math.abs(nextCoordinates.x - currentCoordinates.x) <=
        pipeIncrementLength &&
      Math.abs(nextCoordinates.y - currentCoordinates.y) <= pipeIncrementLength
    ) {
      if (nextDirection != currentDirection) {
        drawCircle({ coordinates: nextCoordinates, color, pipeWidth });
      }

      drawLine({ currentCoordinates, nextCoordinates, color, pipeWidth });
    }

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, pipeRefreshPeriod)
    );

    currentCoordinates = nextCoordinates;
    currentDirection = nextDirection;
    counter--;
  }
};
