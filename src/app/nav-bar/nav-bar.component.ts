import { Component, OnChanges, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { from } from 'rxjs';
// var randomImageJs = require("random-image-js");
import {UserService} from '../Services/user.service';
import {ImageDetailComponent} from '../image-detail/image-detail.component';
import {CakeComponent} from '../cake/cake.component';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
// export class NavBarComponent implements OnInit {
export class NavBarComponent implements OnChanges {

  slider: Promise<any>;
  visible: boolean = false;



  // ngOnInit(): void {

  // }

  images:any[];
  filterBy?: string = 'all'
 allImages:any[] = [];

 entryComponent: [CakeComponent];
  constructor(private imageService: UserService) {
    this.allImages = this.imageService.getImages();
  }
  ngOnChanges() {
    this.allImages = this.imageService.getImages();
  }

}






