import { context } from "./queries";
import { Coordinates, UrlParameters } from "./types";

interface Params {
  currentCoordinates: Coordinates;
  nextCoordinates: Coordinates;
  color: string;
  pipeWidth: UrlParameters["pipeWidth"];
}

export const drawLine = ({
  currentCoordinates,
  nextCoordinates,
  color,
  pipeWidth,
}: Params): void => {
  context.strokeStyle = color;
  context.lineWidth = pipeWidth;

  context.beginPath();
  context.moveTo(currentCoordinates.x, currentCoordinates.y);
  context.lineTo(nextCoordinates.x, nextCoordinates.y);
  context.stroke();
};
