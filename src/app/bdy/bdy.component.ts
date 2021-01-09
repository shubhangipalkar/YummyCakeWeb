import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-bdy',
  templateUrl: './bdy.component.html',
  styleUrls: ['./bdy.component.css']
})
export class BdyComponent implements OnInit {
image: any;

  constructor(private router: ActivatedRoute, private service: UserService) { }

  ngOnInit(): void {
    this.image = this.service.getImage(this.router.snapshot.params['id']);
  }

}
