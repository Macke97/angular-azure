import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book;
  
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    
  }

  updateBook(){
    this._apiService.updateBook(this.book);
  }

}
