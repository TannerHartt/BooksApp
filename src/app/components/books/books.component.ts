import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book, Books} from "../../models/book";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  angularBooks: Books[] = [];
  images: any;

  ngOnInit(): void {
    this.route.params.subscribe(({isbn13}) => {
      this.getAngularBooks();
    });
  }

  getAngularBooks() {
    this.bookService.getBooks('angular').subscribe(angularBookData => {
      this.angularBooks = angularBookData;
    });
  }

  getImages(isbn: string) {
    this.bookService.getBookImages(isbn).subscribe(image => {
      this.images = image;
    });
  }
}
