import {ReservationsService} from "../../services/reservations-service.service";
import {Reservation} from "../../models/reservations";


export class BaseReservationsPage {
  isLoading = false;
  totalResultLength = 0;
  pageSize = 5;
  currentPage = 1;
  pageSizeOptions = [5, 10, 25]
  data: Reservation[] = [];
  dataToShow: Reservation[] = [];
  order: string = '';
  sortBy: string = '';
  startDate: any;
  endDate: any;
  onlyUrgent = false;

  constructor(private _reservationsService: ReservationsService) {
  }

  async fetchReservations() {
    this.isLoading = true;
    let res = await this._reservationsService.getReservations(this.order, this.sortBy, this.currentPage, this.pageSize, this.startDate, this.endDate);
    this.data = res.data
    this.setDataToShow();
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

  async onDateChange(event: { date: Date, type: string }) {
    if (event.type === 'start') this.startDate = event.date.toUTCString()
    if (event.type === 'end') this.endDate = event.date.toUTCString()
    await this.fetchReservations()
  }

  setDataToShow() {
    if (this.onlyUrgent) {
      this.dataToShow = this.data.filter((data) => {
        return data.urgent
      })
    } else {
      this.dataToShow = this.data;
    }
  }

  urgentToggle() {
    this.onlyUrgent = !this.onlyUrgent
    this.setDataToShow()
  }
}
