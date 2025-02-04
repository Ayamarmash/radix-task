import {ReservationsService} from "../../services/reservations-service.service";

export interface ReservationsResponse {
  data: Reservation[];
  status: string;
  status_code: number;
  total_count: number;
}

export interface Reservation {
  id: number;
  reservationId: number;
  status: string;
  type: string;
  scheduled_pickup_time: string;
  pickup_time: string;
  dropoff_time: string;
  cancel_time: string;
  note: string;
  urgent: boolean;
  distance: string;
  duration: string;
  created: string;
}

export class BaseReservationsPage {
  totalResultLength = 0;
  pageSize = 5;
  currentPage = 1;
  pageSizeOptions = [5, 10, 25]
  data: Reservation[] = [];
  order: string = '';
  sortBy: string = '';

  constructor(private _reservationsService: ReservationsService) {
  }

  async fetchReservations() {
    let res: ReservationsResponse = await this._reservationsService.getReservations(this.order, this.sortBy, this.currentPage, this.pageSize);
    this.data = res.data
    this.totalResultLength = res.total_count;
    console.log(this.data)
  }

  async onPaginationChange(event: { pageIndex: number; pageSize: number }) {
    console.log(event)
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    await this.fetchReservations();
  }

  async onSortChange(event: { sortBy: string; order: string }) {
    this.sortBy = event.sortBy;
    this.order = event.order;
    await this.fetchReservations();
  }
}
