import { Component, OnInit, ViewChildren } from '@angular/core';
import { from } from 'rxjs';
import {UserService} from '../Services/user.service';
import {imageValue} from '../Model/image';
import {Router} from '@angular/router';
import { CakeComponent } from '../cake/cake.component';

@Component({
  selector: 'app-kaewachaut',
  templateUrl: './kaewachaut.component.html',
  styleUrls: ['./kaewachaut.component.css']
})
export class KaewachautComponent implements OnInit {


  buyCake: imageValue;
  selected = 1;
  price = 250;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    console.log("karwachaut page");
     }

  buyNow(){
    // return this.service.cakeBook(this.buyCake).subscribe( data => {
    //   console.log(data);
    //   this.buyCake = data;


    //       })
         this.router.navigate(['cake/karwachaut/bookdetail']);

  }

  getSeries($event:any){
    this.selected=$event.value
    console.log(this.selected)


  }

  getPrice(price){
    this.buyCake.price = price
    }


}
