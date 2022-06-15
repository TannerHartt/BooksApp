import { Component, OnInit } from '@angular/core';
import {Books} from "../../models/book";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  angularBooks: Books[] = [];
  reactBooks: Books[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAngularBooks();
    this.getReactBooks();
  }


  getAngularBooks() {
    this.bookService.getBooks('angular').subscribe(angularBookData => {
      this.angularBooks = angularBookData;
    });
  }

  getReactBooks() {
    this.bookService.getBooks('react').subscribe(reactBookData => {
      this.reactBooks = reactBookData;
    });
  }

}
