export interface Book {
  error: string;
  total: string;
  page: string;
  books: Books[];
}

export interface Books {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}
