import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotopage(){
return this.router.navigateByUrl('cake/karwachaut');
  }

}
