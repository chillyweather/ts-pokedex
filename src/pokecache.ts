export type CacheEntry<T> = {
  createdAt: number,
  val: T,
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();

  #reapIntervalId: NodeJS.Timeout | undefined = undefined;

  #interval: number;

  constructor(interval: number) {
    this.#interval = interval
    this.#startReapLoop()
  }

  add<T>(key: string, val: T) {
    const value = {
      createdAt: Date.now(),
      val: val
    }
    this.#cache.set(key, value)
  }

  get<T>(key: string) {
    const result = this.#cache.get(key)
    return result ? result : undefined
  }

  #reap() {
    for (const [key, val] of this.#cache) {
      if (Date.now() - val.createdAt > this.#interval) {
        this.#cache.delete(key)
      }
    }
  }

  #startReapLoop() {
    const interval = setInterval(() => this.#reap(), this.#interval)
    this.#reapIntervalId = interval
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId)
    this.#reapIntervalId = undefined
  }
}



