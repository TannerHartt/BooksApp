import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book, Books} from "../models/book";
import {of, pipe, switchMap} from "rxjs";
import {BookDetails} from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = "https://api.itbook.store/1.0/";

  constructor(private http: HttpClient) { }

  getBooks(type: string, page?: number) {
    return this.http.get<Book>(`${this.baseUrl}/search/${type}?page=${page}`)
      .pipe(switchMap((res) => {
        return of(res.books);
      })
    );
  }

    getNewBook() {
      return this.http.get<Book>(`${this.baseUrl}/new`)
      .pipe(switchMap((res) => {
        return of(res.books);
      })
    );
  }
  getBookDetails(isbn: string) {
    return this.http.get<BookDetails>(`${this.baseUrl}/books/${isbn}`);
  }

}
