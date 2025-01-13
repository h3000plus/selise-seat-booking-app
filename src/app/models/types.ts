export interface Bus {
  id: string;
  name: string;
  seats: Seat[];
}

export interface Seat {
  id: string;
  number: string;
  isBooked: boolean;
  bookingDetails?: BookingDetails;
}

export interface BookingDetails {
  name: string;
  busId: string;
  seatNumber: string;
  destination: string;
  time: string;
  bookingDate: string;
}
