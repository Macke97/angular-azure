import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;
  
  constructor(private _titleService: Title, private router: Router, private activatedRoute: ActivatedRoute,
  private auth: AuthService){}
  
  ngOnInit(){
    this.setPageTitle();
    this.checkIfLoggedIn();
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

  checkIfLoggedIn(){
    this.auth.checkIfLoggedIn().subscribe((response:any) => {
      if(response.loggedIn) {
        this.auth.loggedIn = true;
        console.log('You are logged in!');
      } else {
        console.log('You are not logged in!');
        
      }
    });
  }

}
