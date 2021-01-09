import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-babyshower',
  templateUrl: './babyshower.component.html',
  styleUrls: ['./babyshower.component.css']
})
export class BabyshowerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log ('babyshow is loading')
  }



}
