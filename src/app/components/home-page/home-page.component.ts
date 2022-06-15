import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  // TODO refactor to fit new books on home page and category in books page


}
