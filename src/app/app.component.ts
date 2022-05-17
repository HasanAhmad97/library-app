import { Component, OnInit } from '@angular/core';
import { Book } from './shared/book';
import { BookService } from './shared/book.service';

@Component({
  selector: 'lib-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Library';
  books : Book[] = [];
  constructor(private bookService:BookService){}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data=>{
      this.books=data
      console.log(data[0].publish_date)
    })
    
}
  addTestBook(){
    this.bookService.createBook({
      title:"test",
      author:"Ali",
      publish_date: new Date(),
      edition:4,
      pages:555
    } as Book )
  }
}
