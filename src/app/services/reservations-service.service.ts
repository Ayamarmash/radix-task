import {Injectable} from '@angular/core'
import {CachingService} from "./caching-service";
import {Reservation} from "../models/reservations";

const BASE_URL = 'https://envoy-staging.radixtechs.net/reservations/task'
const STORAGE_KEY = 'reservations_cache';
const CACHE_EXPIRATION_TIME = 60 * 10 * 1000;
export interface ReservationsResponse {
  data: Reservation[];
  status: string;
  status_code: number;
  total_count: number;
}
@Injectable({
  providedIn: 'root'
})

export class ReservationsService {

  constructor(private cachingService: CachingService) {
  }


  async getReservations(order?: string, sortBy?: string, page = 1, pageSize = 10, filter_date_from?: Date, filter_date_to?: Date) {
    let params = `&page=${page}&page_size=${pageSize}`
    order === 'asc' || order === 'desc' ? params += '&order=' + order : ''
    sortBy ? params += '&sort=' + sortBy : ''
    if (filter_date_from && filter_date_to) {
      params += `&filter_date_from=${filter_date_from}&filter_date_to=${filter_date_to}`
    }

    const cachedData = this.cachingService.getFromCache(STORAGE_KEY, params);
    if (cachedData) {
      return cachedData;
    }

    try {
      const res = await fetch(`${BASE_URL}?format=json${params}`)
      const data: ReservationsResponse = await res.json()
      this.cachingService.saveToCache(STORAGE_KEY, params, data, CACHE_EXPIRATION_TIME)

      return data
    } catch (err) {
      throw err
    }
  }
}
