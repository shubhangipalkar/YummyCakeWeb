import { Component, OnChanges, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { from } from 'rxjs';
// var randomImageJs = require("random-image-js");
import {UserService} from '../Services/user.service';
import {ImageDetailComponent} from '../image-detail/image-detail.component';
import {CakeComponent} from '../cake/cake.component';
import { Router } from '@angular/router';
import {dataService} from '../Model/data';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
// export class NavBarComponent implements OnInit {
export class NavBarComponent implements OnChanges {

  slider: Promise<any>;
  visible: boolean = false;
hweb: any;

  // ngOnInit(): void {

  // }

  images:any[];
  filterBy?: string = 'all'
 allImages:any[] = [];

//  entryComponent: [CakeComponent];
  constructor(private imageService: UserService, private router: Router, public dataservice: dataService ) {
    this.allImages = this.imageService.getImages();
  }
  ngOnChanges() {
    this.allImages = this.imageService.getImages();
  }

  gotoweb(url, path){
    console.log ('this is id of selected img', path)
    this.router.navigate([url]);
console.log('this is url ', url);

this.dataservice.datafromService = path;
console.log(this.dataservice.datafromService);
  }


}






