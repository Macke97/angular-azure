import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private _apiService: ApiService) { }
  books: any;

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

    }, 1500)

  }

}
