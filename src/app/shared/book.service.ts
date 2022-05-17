import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private firestore :Firestore) {}

  getBooks():Observable<Book[]>{
    const col = collection(this.firestore,'books')
    return collectionData(col,{idField:'id'}) as Observable<Book[]>
  }
  createBook(book:Book){
    // const bDoc = doc(this.firestore,'books')
    const col = collection(this.firestore,'books');
    return addDoc(col,book)
  }
}
