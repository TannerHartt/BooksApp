import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = "https://www.googleapis.com/books/v1";
  apiKey = "AIzaSyDlgcxXPTIPj2h1MftLMJWEhBPXUiNQu7w";

  constructor(private http: HttpClient) { }

  getBooks() {

  }
}
