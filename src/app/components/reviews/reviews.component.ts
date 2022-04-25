import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/interfaces/review';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {


  reviews :Review[] = [] as Review[];

  constructor(private reviewsService : ReviewsService) {
        reviewsService.getAllReviews()
                        .subscribe({
                          next : (resulte :any) => this.reviews = resulte,
                          error : (err : any ) => console.error('Server Call Failed..', err)
                        })
   }

  ngOnInit(): void {
  }

}
