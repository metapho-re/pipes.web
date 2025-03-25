import { canvas } from "./queries";
import { Coordinates } from "./types";

export const getWrappedCoordinates = (
  coordinates: Coordinates,
): Coordinates => {
  let { x, y } = coordinates;

  const nextX = (function (currentX: number) {
    if (currentX < 0) {
      return (currentX % canvas.width) + canvas.width;
    }

    if (currentX > canvas.width) {
      return currentX % canvas.width;
    }

    return currentX;
  })(x);

  const nextY = (function (currentY: number) {
    if (currentY < 0) {
      return (currentY % canvas.height) + canvas.height;
    }

    if (currentY > canvas.height) {
      return currentY % canvas.height;
    }

    return currentY;
  })(y);

  return { x: nextX, y: nextY };
};
