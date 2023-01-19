import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderFoodComponent } from './order-food/order-food.component';
import { NearMeComponent } from './near-me/near-me.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'near-me', component: NearMeComponent },
  { path: 'order', component: OrderFoodComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
