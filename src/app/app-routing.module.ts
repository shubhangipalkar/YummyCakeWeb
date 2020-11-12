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
// import { CakeRoutingModule } from './cake/cake-routing.module';

const routes: Routes = [
  {path: 'city', component: CityComponent},
  {path: 'cake', component: CakeComponent,
  children : [
  {path: 'ice', component: IceComponent},
  {path: 'bdy', component: BdyComponent },
  {path: 'boss', component: BossComponent},
  {path: 'karwachaut', component: KaewachautComponent},
  {path: 'wedding', component: WeddingComponent},
  {path: 'baby', component: BabyshowerComponent},
  {path: 'karwachaut/bookdetail', component: BookingDetailComponent},
  {path: 'karwachaut/bookdetail/payment', component: PaymentComponent},


  ]},

  {path: '', component: NavBarComponent},
  {path: '**', component: CakeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
