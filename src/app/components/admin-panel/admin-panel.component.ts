import { Component, OnInit } from '@angular/core';
import { Bus, Seat } from 'src/app/models/types';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  buses: Bus[] = [];
  selectedBusId: string = '';
  selectedBus?: Bus;
  selectedSeat?: Seat;

  constructor(private bookingService: BookingService) {
    this.buses = this.bookingService.getBuses();
  }
  ngOnInit(): void {}

  loadBusDetails() {
    if (this.selectedBusId) {
      this.selectedBus = this.bookingService.getBusById(this.selectedBusId);
      this.selectedSeat = undefined;
    }
  }

  showSeatDetails(seat: Seat) {
    this.selectedSeat = seat;
  }
}
