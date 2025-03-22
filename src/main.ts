import { drawPipe } from "./drawPipe";
import { getParameters } from "./getParameters";
import { canvas } from "./queries";
import "./style.css";

canvas.setAttribute("width", String(window.innerWidth));
canvas.setAttribute("height", String(window.innerHeight));

const {
  pipeCount,
  pipeIncrementLength,
  pipeLifespan,
  pipeRefreshPeriod,
  pipeWidth,
} = getParameters();

Array(pipeCount)
  .fill(null)
  .forEach(async () => {
    while (true) {
      await drawPipe({
        pipeIncrementLength,
        pipeLifespan,
        pipeRefreshPeriod,
        pipeWidth,
      });
    }
  });
