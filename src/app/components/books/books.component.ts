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
  newBooks: Books[] = [];
  images: BookDetails[] = [];


  ngOnInit(): void {
    this.route.params.subscribe(({isbn13}) => {
      this.getAngularBooks();
      this.getNewBooks();

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
  
  getNewBooks() {
    this.bookService.getNewBook().subscribe(newBooksData => {
      this.newBooks = newBooksData;
    })
  }


}

