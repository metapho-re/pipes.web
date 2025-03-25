import { context } from "./queries";
import { Coordinates, UrlParameters } from "./types";

interface Params {
  coordinates: Coordinates;
  color: string;
  pipeWidth: UrlParameters["pipeWidth"];
}

export const drawCircle = ({ coordinates, color, pipeWidth }: Params): void => {
  context.fillStyle = color;

  context.beginPath();
  context.arc(coordinates.x, coordinates.y, pipeWidth / 2, 0, 2 * Math.PI);
  context.fill();
};
