import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book, BookDetails} from "../models/book";
import {of, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = "https://api.itbook.store/1.0/";

  constructor(private http: HttpClient) { }

  getBooks(type: string) {
    return this.http.get<Book>(`${this.baseUrl}/search/${type}`)
      .pipe(switchMap((res) => {
        return of(res.books);
      })
    );
  }

  getBookDetails(isbn: string) {
    return this.http.get<BookDetails>(`${this.baseUrl}/books/${isbn}`);
  }

  getBookImages(isbn: string) {
    return this.http.get(`https://itbook.store/img/books/${isbn}.png`);
  }


}
