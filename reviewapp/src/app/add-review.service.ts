import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Review } from "./review";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddReviewService {

  url: string = "";

  constructor(private http: HttpClient) {

  }

  //this method returns an observable
  addReview(review: Review){
    // console.log(this.http.post<any>(this.url, review));
    return this.http.post<any>(this.url, review);
  }

}
