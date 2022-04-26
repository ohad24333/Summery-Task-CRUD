import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Review } from 'src/app/interfaces/review';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-delete-review',
  templateUrl: './delete-review.component.html',
  styleUrls: ['./delete-review.component.css']
})
export class DeleteReviewComponent implements OnInit {

  review : Review = {} as Review;
  id :number = 0;

  constructor(private reviewsService:ReviewsService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
                    activatedRoute.params.subscribe((params:Params) => 
                          this.id = params['id']);

                     reviewsService.getReview(this.id)
                                    .subscribe({
                                      next : (resulte :any) => this.review = resulte,
                                      error : (err:any) => console.error('Server Faild to get review..' , err)
                                    }); 
   }

  ngOnInit(): void {
  }

  onYes(){
    this.reviewsService.deleteReview(this.id)
                        .subscribe({
                          next : (resulte:any) => this.router.navigate(['']),
                          error : (err :any) => console.error('Server Coulde Not Delete Review..' , err)             
                        });
  }

  onNo(){
    this.router.navigate(['']);
  }
}
