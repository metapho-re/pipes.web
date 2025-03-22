import { UrlParameters } from "./types";

const DEFAULT_PIPE_COUNT = 12; // The number of pipes shown at the same time
const DEFAULT_PIPE_INCREMENT_LENGTH = 10; // The length of the line (in pixels) added to each pipe during a refresh
const DEFAULT_PIPE_LIFESPAN = 250; // The number of refresh cycles a pipe goes through before a new one is generated
const DEFAULT_PIPE_REFRESH_PERIOD = 50; // The period of a refresh cycle (in milliseconds)
const DEFAULT_PIPE_WIDTH = 2; // The thickness of the lines (in pixels)

const getDefaultParameterValue = (
  rawValue: string | null,
  defaultValue: number
): number => {
  const value = Number(rawValue);

  return Number.isInteger(value) && value > 0 ? value : defaultValue;
};

export const getParameters = (): UrlParameters => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  return {
    pipeCount: getDefaultParameterValue(
      urlSearchParams.get("count"),
      DEFAULT_PIPE_COUNT
    ),
    pipeIncrementLength: getDefaultParameterValue(
      urlSearchParams.get("increment-length"),
      DEFAULT_PIPE_INCREMENT_LENGTH
    ),
    pipeLifespan: getDefaultParameterValue(
      urlSearchParams.get("lifespan"),
      DEFAULT_PIPE_LIFESPAN
    ),
    pipeRefreshPeriod: getDefaultParameterValue(
      urlSearchParams.get("refresh-period"),
      DEFAULT_PIPE_REFRESH_PERIOD
    ),
    pipeWidth: getDefaultParameterValue(
      urlSearchParams.get("width"),
      DEFAULT_PIPE_WIDTH
    ),
  };
};
