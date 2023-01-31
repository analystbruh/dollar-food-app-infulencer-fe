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
import {MatTooltipModule} from '@angular/material/tooltip';

import { OrderingService } from './services/ordering.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { OrderFoodComponent } from './order-food/order-food.component';
import { OrderFormComponent } from './order-food/order-form/order-form.component';
import { NearMeComponent } from './near-me/near-me.component';
import { VidGridComponent } from './vid-grid/vid-grid.component';
import { PicGridComponent } from './pic-grid/pic-grid.component';
import { SpinComponent } from './spin/spin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TopBarComponent,
    OrderFoodComponent,
    OrderFormComponent,
    NearMeComponent,
    VidGridComponent,
    PicGridComponent,
    SpinComponent
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
    MatInputModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [OrderingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
