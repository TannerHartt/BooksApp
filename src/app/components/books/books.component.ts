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
<<<<<<< HEAD
  images: string = '';
  details: BookDetails | null = null;
  reactBooks: Books[] = [];
=======
  reactBooks: Books[] = [];
  mongodbBooks: Books[] = [];
>>>>>>> joamcgee


  ngOnInit(): void {
    this.route.params.subscribe(({isbn13}) => {
      this.getAngularBooks();
      this.getReactBooks();
<<<<<<< HEAD
      // this.getImages(isbn13)
      this.getBookDetails(isbn13);
=======
      this.getMongodbBooks();
>>>>>>> joamcgee
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

<<<<<<< HEAD

  getReactBooks() {
    this.bookService.getBooks('react', 1).subscribe(reactBookData => {
=======
  getReactBooks() {
    this.bookService.getBooks('react').subscribe(reactBookData => {
>>>>>>> joamcgee
      this.reactBooks = reactBookData;
    });
  }

<<<<<<< HEAD
  getBookDetails(isbn: string) {
    this.bookService.getBookDetails(isbn).subscribe(detail => {
      this.details = detail;
=======
  getMongodbBooks() {
    this.bookService.getBooks('mongodb').subscribe(mongodbBookData => {
      this.mongodbBooks = mongodbBookData;
>>>>>>> joamcgee
    });
  }


}

