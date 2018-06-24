import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;
  
  constructor(private _titleService: Title, private router: Router, private activatedRoute: ActivatedRoute){}
  
  ngOnInit(){
    this.setPageTitle();
  }

  setPageTitle(){
    //Get and set current page title based on data from route
    let currentTitle = this._titleService.getTitle();

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.activatedRoute.root.firstChild.snapshot.data['title']
          ? this.title = this.activatedRoute.root.firstChild.snapshot.data['title']
          : this.title = '';
      }
      this._titleService.setTitle(`${currentTitle} | ${this.title}`);
    });
  }

}
