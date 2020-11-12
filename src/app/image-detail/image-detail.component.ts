import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
image: any;
  constructor(private service: UserService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.image = this.service.getImage(
      this.router.snapshot.params['id']
    )

  }

}
