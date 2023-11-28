import NodeCache from "node-cache";

interface CacheValue {
  data: { title: string; description: string }[] | { requests: number };
  timestamp: number;
}

export class Cache {
  private cache: NodeCache;

  constructor() {
    this.cache = new NodeCache();
  }

  save(
    key: string,
    datas: { title: string; description: string }[] | { requests: number },
    ttlSeconds: number,
    measure: string
  ): void {
    if (typeof key !== "string" || key.trim() === "") {
      throw new Error("A chave deve ser uma string não vazia.");
    }

    if (typeof ttlSeconds !== "number" || ttlSeconds <= 0) {
      throw new Error("O tempo de vida deve ser um número positivo.");
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
    | undefined {
    const cacheValue = this.cache.get(key) as CacheValue | undefined;

    if (cacheValue && cacheValue.timestamp > Date.now()) {
      return cacheValue.data;
    }

    this.cache.del(key);
    return undefined;
  }
}
