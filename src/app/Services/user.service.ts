import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {imageValue} from '../Model/image';
import {Userdetail} from '../Model/bookcake';
import {} from '../boss/boss.component'
  import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
uploadUrl: string;
  url = "http://localhost:3000/User";
  urlb = "http://localhost:3000/bookdetail";
  rooturl = "http://localhost:3000";
  // Imagesdetails = "../../assets/imagedetail.json"

  imageObject: {
    id: number,
    type: string,
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

  Imagesdetails =  [
    {"id":1, "type":"custom", "path":"assets/image/img4.jfif" , "web": "../boss" },
    {"id":2, "type":"custom", "path":"/assets/image/img6.jpg" , "web": "../boss" },
    {"id":3, "type":"custom", "path":"../../assets/image/img7.jpg" , "web": "../boss"  },
    {"id":4, "type":"bshower", "path":"../../assets/image/babyShower/bs1.jfif" , "web": "../cake/baby"},
    {"id":5, "type":"bshower", "path":"../../assets/image/babyShower/bs2.jfif", "web": "../cake/baby" },
    {"id":6, "type":"boss", "path":"../../assets/image/Boss/boss2.jfif" , "web": "../cake/boss"  },
    {"id":7, "type":"boss", "path":"../../assets/image/Boss/boss3.jfif" , "web": "../cake/boss" },
    {"id":8, "type":"wed", "path":"../../assets/image/Wedding/wd2.jfif" , "web": "../cake/wedding" },
    {"id":9, "type":"wed", "path":"../../assets/image/Wedding/wd5.jfif", "web": "../cake/wedding"  },
    {"id":10,"type":"kw","path":"../../assets/image/kaewachaut/kw1.jfif", "web": "../cake/karwachaut" },
    {"id":11, "type":"kw", "path":"../../assets/image/kaewachaut/kw2.jfif", "web": "../cake/karwachaut"},
    {"id":12, "type":"kw", "path":"../../assets/image/kaewachaut/kw3.jfif", "web": "../cake/karwachaut"},
    {"id":13, "type":"kw", "path":"../../assets/image/kaewachaut/kw4.jfif", "web": "../cake/karwachaut"},
    {"id":14, "type":"kw", "path":"../../assets/image/kaewachaut/kw5.jfif", "web": "../cake/karwachaut"},
    {"id":15, "type":"boss", "path":"../../assets/image/Boss/boss7.jfif", "web": "../cake/boss"},
    {"id":16, "type":"wed", "path":"../../assets/image/Wedding/wd3.jfif", "web": "../cake/wedding"},
    {"id":17, "type":"wed", "path":"../../assets/image/Wedding/wd4.jfif", "web": "../cake/wedding"},
    {"id":18, "type":"ice", "path":"../../assets/image/ice/ice1.jfif", "web":"../cake/ice"},
    {"id":19, "type":"ice", "path":"../../assets/image/ice/ice2.jfif", "web":"../cake/ice"},
    {"id":20, "type":"ice", "path":"../../assets/image/ice/ice3.jfif", "web":"../cake/ice"},
    {"id":21, "type":"ice", "path":"../../assets/image/ice/ice4.jfif", "web":"../cake/ice"},
    {"id":22, "type":"ice", "path":"../../assets/image/ice/ice5.jfif", "web":"../cake/ice"},
    {"id":23, "type":"kw", "path":"../../assets/Images/img1.jpg", "web":"../cake/karwachaut"}
  ];

  getImages(){
    return this.imageObject = this.Imagesdetails.slice(0);
  }

  getImage(id: number){
    this.Imagesdetails.slice(0).find(Images => Images.id === id);
  }

  //Message Validation

  msglength(msg: string){
    var no = msg.length;
    if (no <= 25){
      return true;
    }else{
      return false;
      console.log ('lenght is max');
    }
  }


  //// validation for file uploading

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'png' || ext.toLowerCase() == 'jpg'|| ext.toLowerCase() == 'gif') {
        return true;
    }
    else {
        return false;

    }
}

// uploadFile(data: any): Observable<{}> {
//   this.uploadUrl = 'http://localhost:4200/XXXXXXXXXX/uploadFile';
//   return this.http.post(this.uploadUrl, data).map(this.handleData)
//       .catch(this.handleError);
// }

// private handleData(res: Response) {
//   let data = res.json();
//   return data;
// }
// private handleError(error: Response | any) {
//   return Observable.throw('API failed');
// }


saveData(data){
  return this.http.post(this.url,data)
}

}
