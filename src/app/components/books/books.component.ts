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
  details: BookDetails | null = null;
  reactBooks: Books[] = [];
  mongodbBooks: Books[] = [];
  sqlBooks: Books[] = [];
  excelBooks: Books[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(({isbn13}) => {
      this.getAngularBooks();
      this.getReactBooks();
      this.getBookDetails(isbn13);
      this.getMongodbBooks();
      this.getSqlBooks();
      this.getExcelBooks();
    });
  }
  
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

  getSqlBooks() {
    this.bookService.getBooks('sql').subscribe(sqlBookData => {
      this.sqlBooks = sqlBookData;
    });
  }

  getExcelBooks() {
    this.bookService.getBooks('excel', 1).subscribe(excelBookData => {
      this.excelBooks = excelBookData;
    });
  }

}
