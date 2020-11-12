import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import {Userdetail} from '../Model/bookcake';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../Services/user.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  bookcake: FormGroup;
  selected = 1;
  submitted: boolean = false;
  bcake: Userdetail;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.bookcake = new FormGroup ({
 fname: new FormControl (null, Validators.required),
 email: new FormControl (null, [Validators.required, Validators.email, Validators.minLength(8)]),
 mnumber: new FormControl (null, [Validators.required, Validators.minLength(10)]),
 address: new FormControl (null, Validators.required),
 city: new FormControl (null, Validators.required),
 state: new FormControl (null, Validators.required),
 pincode: new FormControl (null, Validators.required),
 payment: new FormControl (null, Validators.required)
    })
  }

  submit(){
    this.submitted = true;
    this.postDetail();
    console.log('submited data');
  }

  postDetail(){
    return this.service.bookdetail(this.bookcake.value).subscribe( (result:any) => {
    // return this.service.bookdetail().subscribe( (result: any) => {

      console.log (result);
      console.log('button is submited');
      this.bcake = result.data;
    })
  }
//Getter methods

get fname(){
return this.bookcake.get('fname') as FormControl;
}
get email(){
  return this.bookcake.get('email') as FormControl;
  }
  get mnumber(){
    return this.bookcake.get('mnumber') as FormControl;
    }
    get address(){
      return this.bookcake.get('address') as FormControl;
      }
      get city(){
        return this.bookcake.get('city') as FormControl;
        }
        get state(){
          return this.bookcake.get('state') as FormControl;
          }
          get pincode(){
            return this.bookcake.get('pincode') as FormControl;
            }
            get payment(){
              return this.bookcake.get('payment') as FormControl;
            }

}
