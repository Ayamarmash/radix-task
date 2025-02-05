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
