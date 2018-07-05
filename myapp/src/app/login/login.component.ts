import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { ComParentChildService } from '../services/com-parent-child.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() getDataEvent = new EventEmitter();

  constructor(private auth: AuthService, private router:Router,
  private comParentChild: ComParentChildService) { }

  ngOnInit() {
  }

  login(data) {
    let formData = {
      username: data.target[0].value.toLowerCase(),
      password: data.target[1].value,
    }

    this.auth.login(formData).subscribe((response:any) => {
      if(response.user) {
        this.auth.loggedIn = true;
        this.router.navigate(['/books']);
        //this.comParentChild.publish('getDataEvent');
      } else this.auth.loggedIn = false;
    });
  }

}
