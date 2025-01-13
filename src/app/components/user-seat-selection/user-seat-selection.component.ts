import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingDetails, Bus, Seat } from 'src/app/models/types';
import { BookingService } from 'src/app/services/booking.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-user-seat-selection',
  templateUrl: './user-seat-selection.component.html',
  styleUrls: ['./user-seat-selection.component.css'],
})
export class UserSeatSelectionComponent implements OnInit {
  bus?: Bus;
  selectedSeat?: Seat;
  bookingDetails: BookingDetails = {
    name: '',
    busId: '',
    seatNumber: '',
    destination: '',
    time: '',
    bookingDate: new Date().toISOString(),
  };

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    const busId = this.route.snapshot.paramMap.get('busId');
    if (busId) {
      this.bus = this.bookingService.getBusById(busId);
      this.bookingDetails.busId = busId;
    }
  }

  selectSeat(seat: Seat) {
    this.selectedSeat = seat;
    if (!seat.isBooked) {
      this.bookingDetails.seatNumber = seat.number;
    }
    else {
      this.toastService.show('This seat is already booked.', 'info')
    }
  }

  bookSeat() {
    if (this.selectedSeat && !this.selectedSeat.isBooked) {
      this.bookingService.bookSeat(this.bookingDetails);
      // Reset form and refresh bus data
      this.selectedSeat = undefined;
      this.bus = this.bookingService.getBusById(this.bookingDetails.busId);
      this.toastService.show('Your seat is successfully booked!', 'success');
    }
  }
}
