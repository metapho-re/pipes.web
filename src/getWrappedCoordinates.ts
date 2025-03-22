import { canvas } from "./queries";
import { Coordinates } from "./types";

export const getWrappedCoordinates = (
  coordinates: Coordinates,
): Coordinates => {
  let { x, y } = coordinates;

  const nextX = (function (currentX: number) {
    if (currentX < 0) {
      return canvas.width;
    }

    if (currentX > canvas.width) {
      return 0;
    }

    return currentX;
  })(x);

  const nextY = (function (currentY: number) {
    if (currentY < 0) {
      return canvas.height;
    }

    if (currentY > canvas.height) {
      return 0;
    }

    return currentY;
  })(y);

  return { x: nextX, y: nextY };
};
