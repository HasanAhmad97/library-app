import { Component, OnInit } from '@angular/core';
import { Book, Book_2 } from '../shared/book';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'lib-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : Book[] = [];
  books_2 : Book_2[]=[
    {title:"test1",author:true,publish_date:new Date(),edition:2,id:"1",pages:45},
    {title:"test2",author:false,publish_date:new Date(),edition:2,id:"1",pages:45},
    {title:"test3",author:true,publish_date:new Date(),edition:2,id:"1",pages:45},
    {title:"test4",author:true,publish_date:new Date(),edition:2,id:"1",pages:45},

  ];
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
