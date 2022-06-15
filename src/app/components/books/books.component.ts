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
  images: string = '';
  details: BookDetails | null = null;
  reactBooks: Books[] = [];
  mongodbBooks: Books[] = [];


  ngOnInit(): void {
    this.route.params.subscribe(({isbn13}) => {
      this.getAngularBooks();
      this.getReactBooks();
      // this.getImages(isbn13)
      this.getBookDetails(isbn13);
      this.getMongodbBooks();
    });
  }


  // getImages(isbn: string) {
  //   this.bookService.getBookImages(isbn).subscribe(image => {
  //     this.images = image;
  //   });
  // }

  getAngularBooks() {
    this.bookService.getBooks('angular', 1).subscribe(angularBookData => {
      this.angularBooks = angularBookData;
    });
  }

  getReactBooks() {
    this.bookService.getBooks('react', 1).subscribe(reactBookData => {
      this.reactBooks = reactBookData;
    });
  }

  getBookDetails(isbn: string) {
    this.bookService.getBookDetails(isbn).subscribe(detail => {
      this.details = detail;
    });
    }

  getMongodbBooks() {
    this.bookService.getBooks('mongodb', 1).subscribe(mongodbBookData => {
      this.mongodbBooks = mongodbBookData;
    });
  }


}

