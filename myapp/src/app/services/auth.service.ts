import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { timeout, delay } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  }),
  withCredentials: true

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  register(formData){
    return this.http.post(`${environment.apiUrl}/register`, formData, httpOptions);
  } 

  getUserData(){
    return this.http.get(`${environment.apiUrl}/get_profile_data`, httpOptions);
  }

  login(formData){
    return this.http.post(`${environment.apiUrl}/login`, formData, httpOptions);
  }

  checkIfLoggedIn(){
    return this.http.get(`${environment.apiUrl}/login`, httpOptions);
  }

  logout(){
    return this.http.get(`${environment.apiUrl}/logout`, httpOptions)
  }

  checkUsername(username){
    return this.http.get(`${environment.apiUrl}/username_taken/${username}`, httpOptions)
    .pipe(
      delay(500)
    );
  }
}
