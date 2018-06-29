import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games;

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.getGames();
    
  }
  
  getGames(){
    this._apiService.getAllGames()
    .subscribe((data: any) => {
      this.games = data.body;
      console.log(this.games[1].cover.url);
      })
  }

}
