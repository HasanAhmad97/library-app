import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ReactiveEmailComponent } from './reactive-email/reactive-email.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'email',component:NewsletterComponent},
  {path:'books',component:BooksComponent},
  {path:'email-reactive',component:ReactiveEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
