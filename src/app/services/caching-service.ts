import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CachingService {
  constructor() {
  }

  getFromCache(storageKey: string, cacheKey: string) {
    const cacheData = localStorage.getItem(storageKey);
    if (!cacheData) return null;

    const parsedCache = JSON.parse(cacheData);
    const cachedEntry = parsedCache[cacheKey];

    if (!cachedEntry) return null;

    const {data, expiration} = cachedEntry;

    if (Date.now() > expiration) {
      this.removeFromCache(storageKey, cacheKey);
      return null;
    }
    return data;
  }

  saveToCache(storageKey: string, cacheKey: string, data: any, expirationTime: number) {
    const cacheData = localStorage.getItem(storageKey);
    const cache = cacheData ? JSON.parse(cacheData) : {};

    cache[cacheKey] = {
      data,
      expiration: Date.now() + expirationTime
    };

    localStorage.setItem(storageKey, JSON.stringify(cache));
  }

  removeFromCache(storageKey: string, cacheKey: string) {
    const cacheData = localStorage.getItem(storageKey);
    if (!cacheData) return;

    const cache = JSON.parse(cacheData);
    delete cache[cacheKey];

    localStorage.setItem(storageKey, JSON.stringify(cache));
  }

}
