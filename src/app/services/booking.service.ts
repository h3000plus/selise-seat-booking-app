import { Injectable } from '@angular/core';
import { BookingDetails, Bus, Seat } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private readonly BUSES_KEY = 'buses';
  private readonly BOOKINGS_KEY = 'bookings';

  private buses: Bus[] = [
    {
      id: '5098',
      name: 'Bus 5098',
      seats: this.generateSeats(),
    },
    {
      id: '5099',
      name: 'Bus 5099',
      seats: this.generateSeats(),
    },
    {
      id: '6000',
      name: 'Bus 6000',
      seats: this.generateSeats(),
    },
    {
      id: '6001',
      name: 'Bus 6001',
      seats: this.generateSeats(),
    },
    {
      id: '6002',
      name: 'Bus 6002',
      seats: this.generateSeats(),
    },
    {
      id: '6003',
      name: 'Bus 6003',
      seats: this.generateSeats(),
    },
  ];

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    const storedBuses = localStorage.getItem(this.BUSES_KEY);
    if (!storedBuses) {
      localStorage.setItem(this.BUSES_KEY, JSON.stringify(this.buses));
    } else {
      this.buses = JSON.parse(storedBuses);
    }
  }

  private generateSeats(): Seat[] {
    const seats: Seat[] = [];
    const rows = ['A', 'B', 'C', 'D', 'E'];
    const columns = [1, 2, 3];

    rows.forEach((row) => {
      columns.forEach((col) => {
        seats.push({
          id: `${row}${col}`,
          number: `${row}${col}`,
          isBooked: false,
        });
      });
    });

    return seats;
  }

  getBuses(): Bus[] {
    return JSON.parse(localStorage.getItem(this.BUSES_KEY) || '[]');
  }

  getBusById(id: string): Bus | undefined {
    return this.getBuses().find((bus) => bus.id === id);
  }

  bookSeat(bookingDetails: BookingDetails): void {
    const buses = this.getBuses();
    const bus = buses.find((b) => b.id === bookingDetails.busId);

    if (bus) {
      const seat = bus.seats.find(
        (s) => s.number === bookingDetails.seatNumber
      );
      if (seat && !seat.isBooked) {
        seat.isBooked = true;
        seat.bookingDetails = bookingDetails;
        localStorage.setItem(this.BUSES_KEY, JSON.stringify(buses));
      }
    }
  }
}
