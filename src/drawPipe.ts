import { drawCircle } from "./drawCircle";
import { drawLineWithWrapAround } from "./drawLineWithWrapAround";
import { getNextCoordinates } from "./getNextCoordinates";
import { getNextDirection } from "./getNextDirection";
import { getRandomColor } from "./getRandomColor";
import { canvas } from "./queries";
import { Coordinates, Direction, UrlParameters } from "./types";

interface Params {
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
}: Params): Promise<void> => {
  const color = getRandomColor(Math.random());

  let currentCoordinates: Coordinates = {
    x: Math.floor(canvas.width * Math.random()),
    y: Math.floor(canvas.height * Math.random()),
  };
  let currentDirection: Direction = Math.floor(
    (Object.keys(Direction).length / 2) * Math.random()
  );
  let counter = pipeLifespan;

  drawCircle({ coordinates: currentCoordinates, color, pipeWidth });

  while (counter >= 0) {
    const nextCoordinates = getNextCoordinates({
      coordinates: currentCoordinates,
      direction: currentDirection,
      pipeIncrementLength,
    });
    const nextDirection = getNextDirection(currentDirection);

    drawLineWithWrapAround({
      currentCoordinates,
      nextCoordinates,
      color,
      pipeIncrementLength,
      pipeWidth,
    });

    drawCircle({ coordinates: nextCoordinates, color, pipeWidth });

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
