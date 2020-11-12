import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {imageValue} from '../Model/image';
import {Userdetail} from '../Model/bookcake';
  import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3000/User";
  urlb = "http://localhost:3000/bookdetail";
  rooturl = "http://localhost:3000";
  imageObject: {
    id: number,
    alt: string,
    path: string
  }[];
  constructor(private http: HttpClient) { }

  cakeBook(book: imageValue){
    return this.http.post<imageValue>('url',book);
  }

  bookdetail(bdetail: Userdetail): Observable<Userdetail>{
    return this.http.post<Userdetail>(this.urlb, bdetail);
  }

  // bookdetail(){
  //   return this.http.get(this.urlb);
  // }

  Imagesdetails = [
    {"id":1, alt:"custom", path:"assets/image/img4.jfif"  },
    {"id":2, alt:"custom", path:"/assets/image/img6.jpg"  },
    {"id":3, alt:"custom", path:"../../assets/image/img7.jpg"  },
    {"id":4, alt:"bshower", path:"../../assets/image/babyShower/bs1.jfif"  },
    {"id":5, alt:"bshower", path:"../../assets/image/babyShower/bs2.jfif"  },
    {"id":6, alt:"boss", path:"../../assets/image/Boss/boss2.jfif"  },
    {"id":7, alt:"boss", path:"../../assets/image/Boss/boss3.jfif"  },
    {"id":8, alt:"wed", path:"../../assets/image/Wedding/wd2.jfif"  },
    {"id":9, alt:"wed", path:"../../assets/image/Wedding/wd5.jfif"  },
    {"id":10, alt:"kw", path:"../../assets/image/kaewachaut/kw1.jfif"  },
    {"id":11, alt:"kw", path:"../../assets/image/kaewachaut/kw2.jfif"  },
    {"id":12, alt:"kw", path:"../../assets/image/kaewachaut/kw3.jfif"  },
    {"id":13, alt:"kw", path:"../../assets/image/kaewachaut/kw4.jfif"  },
    {"id":14, alt:"kw", path:"../../assets/image/kaewachaut/kw5.jfif"  },
    {"id":15, alt:"boss", path:"../../assets/image/Boss/boss7.jfif"  },
    {"id":16, alt:"wed", path:"../../assets/image/Wedding/wd3.jfif"  },
    {"id":17, alt:"wed", path:"../../assets/image/Wedding/wd4.jfif"  },
  ]

  getImages(){
    return this.imageObject = this.Imagesdetails.slice(0);
  }

  getImage(id: number){
    this.Imagesdetails.slice(0).find(Images => Images.id == id);
  }

}
