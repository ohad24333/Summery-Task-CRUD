import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
