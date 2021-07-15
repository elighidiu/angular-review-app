import { Component } from '@angular/core';
import { Review } from './review';
import { AddReviewService } from "./add-review.service";
import { OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //create new obj reviewModel through the review class with all the properties set to null.
 reviewModel = new Review("", "", "", "","");

 allReviews: any;

 constructor(private addReviewService: AddReviewService) {

 }

 ngOnInit() {
   this.fetchAsync('http://localhost:9003/allReviews').then();
 }

 //
 addReview(){
   // console.log(this.reviewModel);
   this.addReviewService.addReview(this.reviewModel).subscribe(data => console.log("it worked"), error => console.log("it didn't work"));
   this.fetchAsync('http://localhost:9003/allReviews').then();
 }

  async fetchAsync (url: string):Promise<any> {
    // await response of fetch call
    let response = await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    this.allReviews = data;
    return this.allReviews;
  }

}
