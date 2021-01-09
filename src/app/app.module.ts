import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {NgImageSliderModule} from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CityComponent } from './city/city.component';
import {Router, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { CakeComponent } from './cake/cake.component';
import { WeddingComponent } from './wedding/wedding.component';
import { BossComponent } from './boss/boss.component';
import { BdyComponent } from './bdy/bdy.component';
import { KaewachautComponent } from './kaewachaut/kaewachaut.component';
import { IceComponent } from './ice/ice.component';
import { BabyshowerComponent } from './babyshower/babyshower.component';
import {HttpClientModule} from '@angular/common/http';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { UserService } from './Services/user.service';
import { PaymentComponent } from './payment/payment.component';
import { FilterImagePipe } from './filter-image.pipe';
import { dataService } from './Model/data';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CityComponent,
    CakeComponent,
    WeddingComponent,
    BossComponent,
    BdyComponent,
    KaewachautComponent,
    IceComponent,
    BabyshowerComponent,
    BookingDetailComponent,
    ImageDetailComponent,
    PaymentComponent,
    FilterImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgImageSliderModule
  ],
  providers: [FilterImagePipe, UserService, dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
