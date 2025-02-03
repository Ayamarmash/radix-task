import {Injectable} from '@angular/core'
import {CachingService} from "./caching-service";

const BASE_URL = 'https://envoy-staging.radixtechs.net/reservations/task'
const STORAGE_KEY = 'reservations_cache';
const CACHE_EXPIRATION_TIME = 60 * 10 * 1000;

type SortOrder = 'asc' | 'desc';

@Injectable({
  providedIn: 'root'
})

export class ReservationsService {

  constructor(private cachingService: CachingService) {
  }


  async getReservations(order?: SortOrder, sortBy?: string, page = 1, pageSize = 10) {
    let params = `&page=${page}&page_size=${pageSize}`
    order ? params += '&order=' + order : ''
    sortBy ? params += '&sort=' + sortBy : ''

    const cachedData = this.cachingService.getFromCache(STORAGE_KEY, params);
    if (cachedData) {
      console.log('from cache ')
      return cachedData;
    }

    try {
      const res = await fetch(`${BASE_URL}?format=json${params}`)
      const data = await res.json()
      this.cachingService.saveToCache(STORAGE_KEY, params, data, CACHE_EXPIRATION_TIME)
      console.log('added to cache ')
      return data
    } catch (err) {
      throw err
    }
  }
}
