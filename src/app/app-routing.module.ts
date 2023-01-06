import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VidGridLocComponent } from './vid-grid-loc/vid-grid-loc.component';
import { OrderFoodComponent } from './order-food/order-food.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'near-me', component: VidGridLocComponent },
  { path: 'order', component: OrderFoodComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
