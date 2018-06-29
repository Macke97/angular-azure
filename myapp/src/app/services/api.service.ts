import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from '../books/model';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
    
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  booksUrl = environment.booksUrl;
  gamesUrl = environment.gamesUrl;
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  getBooks(){
    return this.http.get(this.booksUrl);
  }

  addBook(book: Book){
    return this.http.post(this.booksUrl, book, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  removeBook(id: string) {
    return this.http.delete(`${this.booksUrl}/remove/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateBook(book: any) {
    return this.http.put(`${this.booksUrl}/update/${book._id}`, book, httpOptions);
  }

  getAllGames(){
    return this.http.get(this.gamesUrl);
  }

}
