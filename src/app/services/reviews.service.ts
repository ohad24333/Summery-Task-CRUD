import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../interfaces/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  server : string = "http://localhost:3000/reviews";

  constructor(private http:HttpClient) { }

  getAllReviews(){
    return this.http.get(this.server);
  }

  getReview(id:number){
    return this.http.get(`${this.server}/${id}`);
  }

  deleteReview(id:number){
   return this.http.delete(`${this.server}/${id}`);
  }

  updateReview(id:number,newReview : Review){
    return this.http.put(`${this.server}/${id}` , newReview);
  }

  postReview(review: Review){
    return this.http.post(`${this.server}`, review)
  }
}
