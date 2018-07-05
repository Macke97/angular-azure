import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ComParentChildService } from '../services/com-parent-child.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private comParentChild: ComParentChildService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout().subscribe((response:any) => {
      
    });
  }

}
