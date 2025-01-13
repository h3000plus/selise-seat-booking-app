import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from 'src/app/models/types';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  buses: Bus[] = [];

  constructor(private bookingService: BookingService, private router: Router) {
    this.buses = this.bookingService.getBuses();
  }
  ngOnInit(): void {
    
  }

  getAvailableSeats(bus: Bus): number {
    return bus.seats.filter((seat) => !seat.isBooked).length;
  }

  selectBus(bus: Bus) {
    this.router.navigate(['/user/seats', bus.id]);
  }
}
