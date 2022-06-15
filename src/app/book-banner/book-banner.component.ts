import {Component, Input, OnInit} from '@angular/core';
import {Books} from "../models/book";

@Component({
  selector: 'app-book-banner',
  templateUrl: './book-banner.component.html',
  styleUrls: ['./book-banner.component.css']
})
export class BookBannerComponent implements OnInit {

  @Input() books: Books[] = [];
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
