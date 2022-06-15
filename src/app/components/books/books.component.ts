import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book, BookDetails, Books} from "../../models/book";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  angularBooks: Books[] = [];
  reactBooks: Books[] = [];
  mongodbBooks: Books[] = [];


  ngOnInit(): void {
    this.route.params.subscribe(({isbn13}) => {
      this.getAngularBooks();
      this.getReactBooks();
      this.getMongodbBooks();
    });
  }


  // getImages(isbn: string) {
  //   this.bookService.getBookImages(isbn).subscribe(image => {
  //     this.images = image;
  //   });
  // }
  
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

  getMongodbBooks() {
    this.bookService.getBooks('mongodb').subscribe(mongodbBookData => {
      this.mongodbBooks = mongodbBookData;
    });
  }


}

