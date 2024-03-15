import { RateLimiter } from "limiter";

export const limiterEmail = new RateLimiter({
  tokensPerInterval: 9,
  interval: "min",
  fireImmediately: true
})