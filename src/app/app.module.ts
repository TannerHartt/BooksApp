import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { CarouselModule } from 'primeng/carousel';


import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { HeaderComponent } from './constants/header/header.component';
import { FooterComponent } from './constants/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BookComponent } from './pages/book/book.component';
import { BookBannerComponent } from './book-banner/book-banner.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'books', component: BooksComponent},
  { path: 'book/:isbn13', component: BookComponent},


  { path: '**', component: HomePageComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    BookComponent,
    BookBannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CarouselModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
