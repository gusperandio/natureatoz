import NodeCache from "node-cache";

interface CacheValue {
  data: { title: string; description: string }[] | { requests: number } | {key: string};
  timestamp: number;
}

export class Cache {
  private cache: NodeCache;

  constructor() {
    this.cache = new NodeCache();
  }

  save(
    key: string,
    datas: { title: string; description: string }[] | { requests: number } | {key: string},
    ttlSeconds: number,
    measure: string
  ): void {
    if (typeof key !== "string" || key.trim() === "") {
      throw new Error("Key is not a string");
    }

    if (typeof ttlSeconds !== "number" || ttlSeconds <= 0) {
      throw new Error("Number incorrect");
    }

    let calculatedMeasure =
      measure === "Day"
        ? Date.now() + ttlSeconds * 1000 * 60 * 60 * 24
        : measure === "Hour"
        ? Date.now() + ttlSeconds * 1000 * 60 * 60
        : Date.now() + ttlSeconds * 1000;

    const cacheValue: CacheValue = {
      data: datas,
      timestamp: calculatedMeasure,
    };

    this.cache.set(key, cacheValue);
  }

  find(
    key: string
  ):
    | { title: string; description: string }[]
    | { requests: number }
    | { key: string }
    | undefined {
    const cacheValue = this.cache.get(key) as CacheValue | undefined;

    if (cacheValue && cacheValue.timestamp > Date.now()) {
      return cacheValue.data;
    }

    this.cache.del(key);
    return undefined;
  }
}
