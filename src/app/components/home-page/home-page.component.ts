import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/models/book';
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // TODO refactor to fit new books on home page and category in books page

  angularBooks: Books[] = [];
  newBooks: Books[] = [];
  images: string = "";

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getNewBooks();
  }


  getNewBooks() {
    this.bookService.getNewBook().subscribe(newBooksData => {
      this.newBooks = newBooksData;
    })
  }
}
