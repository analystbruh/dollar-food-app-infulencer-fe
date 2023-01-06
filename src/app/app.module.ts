import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { OrderingService } from './services/ordering.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { VidGridComponent } from './home/vid-grid/vid-grid.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { VidGridLocComponent } from './vid-grid-loc/vid-grid-loc.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { OrderFoodComponent } from './order-food/order-food.component';
import { OrderFormComponent } from './order-food/order-form/order-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VidGridComponent,
    FooterComponent,
    VidGridLocComponent,
    TopBarComponent,
    OrderFoodComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    AppRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [OrderingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
