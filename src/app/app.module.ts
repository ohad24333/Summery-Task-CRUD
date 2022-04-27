import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { DeleteReviewComponent } from './components/delete-review/delete-review.component';
import { EditReviewComponent } from './components/edit-review/edit-review.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {path:'' , component : ReviewsComponent },
  {path:'edit/:id' , component : EditReviewComponent },
  {path:'delete/:id' , component : DeleteReviewComponent },
  {path:'add' , component : AddReviewComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    AddReviewComponent,
    DeleteReviewComponent,
    EditReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
