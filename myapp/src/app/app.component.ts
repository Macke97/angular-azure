import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ComParentChildService } from './services/com-parent-child.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;
  userFirstname: string;
  subscription;
  
  constructor(private _titleService: Title, private router: Router, private activatedRoute: ActivatedRoute,
  public auth: AuthService, private comParentChild: ComParentChildService){}
  
  ngOnInit(){
    this.setPageTitle();
    this.checkIfLoggedIn();
    this.subscription = this.comParentChild.on('getDataEvent').subscribe(() => this.getUserData());
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
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
        this.getUserData();
      } else {
        console.log('You are not logged in!');
      }
    });
  }

  getUserData(){
    if(this.auth.loggedIn){
      this.auth.getUserData().subscribe((response:any) => {
        this.userFirstname = response.data.firstname;
      });
      this.subscription.unsubscribe();
    }
  }
}
