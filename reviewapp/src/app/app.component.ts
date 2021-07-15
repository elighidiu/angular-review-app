import { Component } from '@angular/core';
import { Review } from './review';
import { AddReviewService } from "./add-review.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //create new obj reviewModel through the review class with all the properties set to null.
 reviewModel = new Review("", "", "", "","");

 constructor(private addReviewService: AddReviewService) {

 }
 //
 addReview(){
   // console.log(this.reviewModel);
   this.addReviewService.addReview(this.reviewModel).subscribe(data => console.log("it worked"), error => console.log("it didn't work"));
 }
}
