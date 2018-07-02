import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GreetingComponent } from './greeting/greeting.component';
import { BooksComponent } from './books/books.component';
import { GamesListComponent } from './games-list/games-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'greeting', component: GreetingComponent, data: { title: 'Greeting' }},
  {path: 'books', component: BooksComponent, data: { title: 'Böcker' }, canActivate: [AuthGuard]},
  {path: 'games', component: GamesListComponent, data: { title: 'Spel' }},
  { path: 'register', component: RegisterComponent, data: { title: 'Registrera' } },
  { path: 'login', component: LoginComponent, data: { title: 'Logga In' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
