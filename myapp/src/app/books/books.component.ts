import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Book } from './model';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private _apiService: ApiService, private auth: AuthService) { }
  books: any;
  model: Book = new Book('', '', '');
  noBooks = true;
  selectedBook: any = {};
  userFirstname;

  ngOnInit() {
    this.getAllBooks();
    this.getProfileData();
  }

  getProfileData(){
    this.auth.getUserData().subscribe((response:any) => this.userFirstname = response.data.firstname);
  }
  
  checkIfBooks(){
    this.books.length > 0 ? this.noBooks = false : this.noBooks = true;
  }

  getAllBooks(){
    setTimeout(() => { //Simulate loading
      this._apiService.getBooks()
      .subscribe((data:any) => {
        this.books = data;
        console.log(this.books)
        this.checkIfBooks();
      });

    }, 500);

  }

  bookSubmit(){
    this._apiService.addBook(this.model)
      .subscribe((resp:any) => {
        console.log(resp);
        this.books.unshift(resp);
        this.checkIfBooks();
      });
  }

  removeBook(id: string){
    this._apiService.removeBook(id)
      .subscribe((resp: any) => {
        console.log(resp);
        let index = this.books.findIndex(b => b._id === resp._id); //Find index of our object we want to remove. Getting ID from response from backend
        console.log('Removed', this.books[index]);
        this.books.splice(index, 1);
        this.checkIfBooks();
      });
  }

}
