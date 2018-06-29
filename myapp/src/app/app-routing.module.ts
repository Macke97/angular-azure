import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GreetingComponent } from './greeting/greeting.component';
import { BooksComponent } from './books/books.component';
import { GamesListComponent } from './games-list/games-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'greeting', component: GreetingComponent, data: { title: 'Greeting' }},
  {path: 'books', component: BooksComponent, data: { title: 'Böcker' }},
  {path: 'games', component: GamesListComponent, data: { title: 'Spel' }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
