import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {CityComponent} from './city/city.component';
import {CakeComponent} from './cake/cake.component';
import {IceComponent} from './ice/ice.component';
import {BdyComponent} from './bdy/bdy.component';
import {BossComponent} from './boss/boss.component';
import {KaewachautComponent} from './kaewachaut/kaewachaut.component';
import {WeddingComponent} from './wedding/wedding.component';
import {BabyshowerComponent} from './babyshower/babyshower.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { PaymentComponent } from './payment/payment.component';
import { FooterComponent } from './footer/footer.component';
// import { CakeRoutingModule } from './cake/cake-routing.module';

const routes: Routes = [
  {path: 'nav', component: NavBarComponent},
  {path: 'city', component: CityComponent},
  {path: 'cake', component: CakeComponent},
  {path: 'cake/ice', component: IceComponent},
  {path: 'cake/bdy', component: BdyComponent },
  {path: 'cake/boss', component: BossComponent},
  {path: 'cake/karwachaut', component: KaewachautComponent},
  // {path: 'cake/karwachaut/:id', component: KaewachautComponent},
  {path: 'cake/wedding', component: WeddingComponent},
  {path: 'cake/baby', component: BabyshowerComponent},
  // {path: 'karwachaut/bookdetail', component: BookingDetailComponent},
  // {path: 'karwachaut/bookdetail/payment', component: PaymentComponent},
  // {path: '**', component: CakeComponent},
  {path: '', component: NavBarComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
