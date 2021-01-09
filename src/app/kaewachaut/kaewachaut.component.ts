
import { Component, Input, OnChanges, OnInit, ViewChildren } from '@angular/core';
import { from } from 'rxjs';
import {UserService} from '../Services/user.service';
import {imageValue} from '../Model/image';
import {ActivatedRoute, Router} from '@angular/router';
import { CakeComponent } from '../cake/cake.component';
import {dataService} from '../Model/data';

@Component({
  selector: 'app-kaewachaut',
  templateUrl: './kaewachaut.component.html',
  styleUrls: ['./kaewachaut.component.css']
})
 export class KaewachautComponent implements OnInit {
// export class KaewachautComponent implements OnChanges {
  kgimage:any;
  image: any;
  buyCake: imageValue;
  selected = 1;
  msgf: boolean = false;
  price: number;
  filterBy?: string = 'kw';
  allImages:any[]= [];
  // constructor(private service: UserService, private router: Router, private acRouter: ActivatedRoute, public dataservice: dataService) { }
  constructor(private service: UserService, private router: Router, private acRouter: ActivatedRoute, public dataservice: dataService) { }

  ngOnInit(): void {

   console.log("karwachaut page");
   console.log(this.dataservice.datafromService);
this.kgimage = this.dataservice.datafromService;


    // this.image = this.service.getImage(this.acRouter.snapshot.params['id']);
    // this.image = this.service.getImage(id);
    // console.log('image value: ',this.image);

// this.acRouter.paramMap.subscribe( params => {
//   id = params.get('id');
//   console.log(id);

//   path = params.get('path');
//   console.log(path);
// });
     }

//   ngOnChanges() {
//     this.allImages = this.service.getImages();
//   }

  buyNow(){
    // return this.service.cakeBook(this.buyCake).subscribe( data => {
    //   console.log(data);
    //   this.buyCake = data;


    //       })
         this.router.navigate(['bookdetail']);

  }

  getSeries($event:any){
    this.selected=$event.value
    console.log(this.selected);
  }


// File uploading code

upload(event: any) {
  let files = event.target.files;
  //check file is valid
  if (!this.service.validateFile(files[0].name)) {
      console.log('Selected file format is not supported');
      return false;
  }

  let fData: FormData = new FormData;

  for (var i = 0; i < files.length; i++) {
      fData.append("file", files[i]);
  }
  var _data = {
      filename: 'Sample File',
      id: '0001'
  }

  // fData.append("data", JSON.stringify(_data));
  // this.service.uploadFile(fData).subscribe(
  //     response => console.log(response),
  //     error => console.log(error)
  // )
}





 }
