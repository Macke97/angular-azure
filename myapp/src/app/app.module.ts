import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { ApiService } from './services/api.service';
import { ReversePipe } from './reverse.pipe';
import { GamesListComponent } from './games-list/games-list.component';
import { BookComponent } from './book/book.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    HomeComponent,
    BooksComponent,
    ReversePipe,
    GamesListComponent,
    BookComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    AuthService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
