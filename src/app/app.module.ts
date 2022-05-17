import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {provideFirebaseApp,initializeApp} from '@angular/fire/app';
import {provideFirestore,getFirestore} from '@angular/fire/firestore'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment as env } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveEmailComponent } from './reactive-email/reactive-email.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsletterComponent,
    HeaderComponent,
    BooksComponent,
    ReactiveEmailComponent
  ],
  imports: [
    provideFirebaseApp(()=>initializeApp(env.firebaseConfig)),
    provideFirestore(()=>getFirestore()),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
