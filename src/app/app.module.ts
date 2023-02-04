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
import { MatTooltipModule } from '@angular/material/tooltip';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { HttpClientModule } from '@angular/common/http';

import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

import { OrderingService } from './services/ordering.service';
import { PlayTrackerService } from './services/play-tracker.service';

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
    MatTooltipModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
    OrderingService,
    PlayTrackerService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1000894517370-6ke7b5l6va47gds2ohj62kehjne2dt1o.apps.googleusercontent.com',
              {
                oneTapEnabled: false
              }
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
