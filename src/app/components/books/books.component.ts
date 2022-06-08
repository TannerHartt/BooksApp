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

  ngOnInit(): void {
    this.getAngularBooks();
  }

  getAngularBooks() {
    this.bookService.getBooks('angular').subscribe(angularBookData => {
      this.angularBooks = angularBookData;
      console.log(angularBookData);
    });
  }
}
