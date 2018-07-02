import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  login(data) {
    let formData = {
      firstname: data.target[0].value,
      username: data.target[1].value,
      password: data.target[2].value,
    }

    this.auth.login(formData).subscribe((response:any) => {
      if(response.user) {
        this.auth.loggedIn = true;
        this.router.navigate(['/books']);
      } else this.auth.loggedIn = false;
    });
  }

}
