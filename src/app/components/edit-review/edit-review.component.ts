import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Review } from 'src/app/interfaces/review';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent implements OnInit {

  review : Review = {} as Review;
  id : number = 0;
  constructor(private reviewsService:ReviewsService,
              private acticatedRoute:ActivatedRoute,
              private router :Router) {
                  acticatedRoute.params.subscribe((params:Params) =>
                                 this.id = params['id']);
                  reviewsService.getReview(this.id)
                                .subscribe((resulte : any) => {
                                  this.review = resulte;
                                  console.log (this.review)});

               }

  ngOnInit(): void {
  }

  onSubmit(){
    this.reviewsService.updateReview(this.id,this.review)
                        .subscribe({
                          next: (resulte:any) => this.router.navigate(['']),
                          error: (err:any) => console.log("Server failed to update.." , err)
                        });
  }
}
