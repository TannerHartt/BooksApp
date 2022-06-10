import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book, Books} from "../../models/book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService) { }

  angularBooks: Books[] = [];
  newBooks: Books[] = [];

  ngOnInit(): void {
    this.getAngularBooks();
    this.getNewBooks();
  }

  getAngularBooks() {
    this.bookService.getBooks('angular').subscribe(angularBookData => {
      this.angularBooks = angularBookData;
    });
  }
  
  getNewBooks() {
    this.bookService.getNewBook().subscribe(newBooksData => {
      this.newBooks = newBooksData;
    })
  }


}

