import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Review } from "./review";

@Injectable({
  providedIn: 'root'
})
export class AddReviewService {

  url: string = "";

  constructor(private http: HttpClient) {

  }

  postReview(review: Review){
    return this.http.post<any>(this.url, review);
  }

}
