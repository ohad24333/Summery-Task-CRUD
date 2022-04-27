import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from 'src/app/interfaces/review';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  review : Review = {grade:1} as Review;

  constructor(private reviewsService:ReviewsService
              ,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.reviewsService.postReview(this.review)
                        .subscribe({
                          next: (resulte:any) => this.router.navigate(['']),
                          error: (err:any) => console.error('Server failed to post..',err)
                        });
  }
}
