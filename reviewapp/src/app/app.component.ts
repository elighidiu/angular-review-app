import { Component } from '@angular/core';
import { Review } from './review';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //create new obj reviewModel through the review class with all the properties set to null.
 reviewModel = new Review("", "", "", "");
}
