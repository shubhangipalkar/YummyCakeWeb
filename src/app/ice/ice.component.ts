
import { IMPLICIT_REFERENCE } from '@angular/compiler/src/render3/view/util';
import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-ice',
  templateUrl: './ice.component.html',
  styleUrls: ['./ice.component.css']
})
export class IceComponent implements OnChanges {
  images:any[];
  filterBy?: string = 'custom'
 allImages:any[] = [];
 value: string = 'custom';

  constructor(private service: UserService) {
    this.allImages = this.service.getImages();
  }
  ngOnChanges() {
    this.allImages = this.service.getImages();

  }
  }



