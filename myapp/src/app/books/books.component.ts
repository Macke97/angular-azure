import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Book } from './model';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private _apiService: ApiService) { }
  books: any;
  model: Book = new Book('', '', '');

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
    setTimeout(() => { //Simulate loading
      this._apiService.getBooks()
      .subscribe((data:any) => {
        this.books = data;
        console.log(this.books)
      });

    }, 500);

  }

  bookSubmit(){
    this._apiService.addBook(this.model)
      .subscribe((resp:any) => {
        this.books.unshift(resp);
      });
  }

}
