import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow -Origin': '*'
});

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  booksUrl = 'https://angular-och-azure.azurewebsites.net/api/books';
  

  getBooks(){
    return this.http.get(this.booksUrl);
  }
}
