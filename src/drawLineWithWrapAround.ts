import { drawLine } from "./drawLine";
import { canvas } from "./queries";
import { Coordinates, UrlParameters } from "./types";

interface Params {
  currentCoordinates: Coordinates;
  nextCoordinates: Coordinates;
  color: string;
  pipeIncrementLength: UrlParameters["pipeIncrementLength"];
  pipeWidth: UrlParameters["pipeWidth"];
}

export const drawLineWithWrapAround = ({
  currentCoordinates,
  nextCoordinates,
  color,
  pipeIncrementLength,
  pipeWidth,
}: Params): void => {
  const isHorizontalWrapAround =
    Math.abs(nextCoordinates.x - currentCoordinates.x) > pipeIncrementLength;
  const isVerticalWrapAround =
    Math.abs(nextCoordinates.y - currentCoordinates.y) > pipeIncrementLength;

  const drawLineWithContext = (
    parameters: Omit<Parameters<typeof drawLine>[0], "color" | "pipeWidth">
  ) => {
    drawLine({ ...parameters, color, pipeWidth });
  };

  if (isHorizontalWrapAround) {
    drawLineWithContext({
      currentCoordinates: {
        x: Math.max(currentCoordinates.x, nextCoordinates.x),
        y: currentCoordinates.y,
      },
      nextCoordinates: { x: canvas.width, y: nextCoordinates.y },
    });

    drawLineWithContext({
      currentCoordinates: { x: 0, y: currentCoordinates.y },
      nextCoordinates: {
        x: Math.min(currentCoordinates.x, nextCoordinates.x),
        y: nextCoordinates.y,
      },
    });
  } else if (isVerticalWrapAround) {
    drawLineWithContext({
      currentCoordinates: {
        x: currentCoordinates.x,
        y: Math.max(currentCoordinates.y, nextCoordinates.y),
      },
      nextCoordinates: { x: nextCoordinates.x, y: canvas.height },
    });

    drawLineWithContext({
      currentCoordinates: { x: currentCoordinates.x, y: 0 },
      nextCoordinates: {
        x: nextCoordinates.x,
        y: Math.min(currentCoordinates.y, nextCoordinates.y),
      },
    });
  } else {
    drawLineWithContext({ currentCoordinates, nextCoordinates });
  }
};
