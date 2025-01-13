import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserSeatSelectionComponent } from './components/user-seat-selection/user-seat-selection.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/seats/:busId', component: UserSeatSelectionComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
