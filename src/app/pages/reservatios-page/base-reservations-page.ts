import {ReservationsService} from "../../services/reservations-service.service";
import {Reservation} from "../../models/reservations";


export class BaseReservationsPage {
  isLoading = false;
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
    this.isLoading = true;
    let res = await this._reservationsService.getReservations(this.order, this.sortBy, this.currentPage, this.pageSize);
    this.data = res.data
    this.totalResultLength = res.total_count;
    this.isLoading = false;
  }

  async onPaginationChange(event: { pageIndex: number; pageSize: number }) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    await this.fetchReservations();
  }

  async onSortChange(event: { sortBy: string; order: string }) {
    this.currentPage = 1;
    this.sortBy = event.sortBy;
    this.order = event.order;
    await this.fetchReservations();
  }
}
