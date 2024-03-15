import { RateLimiter } from "limiter";

export const limiterToken = new RateLimiter({
  tokensPerInterval: 300,
  interval: "min",
  fireImmediately: true
})