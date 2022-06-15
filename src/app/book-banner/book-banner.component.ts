import {Component, Input, OnInit} from '@angular/core';
import {Book, Books} from "../models/book";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-book-banner',
  templateUrl: './book-banner.component.html',
  styleUrls: ['./book-banner.component.css']
})
export class BookBannerComponent implements OnInit {

  @Input() books: Books[] = [];
  @Input() title: string = '';
  angularBooks: Books[] = [];


  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.getAngularBooks();
  }

  getAngularBooks() {
    this.service.getBooks('angular', 1).subscribe(angularBookData => {
      this.angularBooks = angularBookData;
    });
  }

}
