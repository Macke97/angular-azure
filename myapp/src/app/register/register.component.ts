import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(data){
    let formData = {
      firstname: data.target[0].value,
      username: data.target[1].value,
      password: data.target[2].value,
    }

    console.log(formData);
    
    
    this.auth.register(formData).subscribe(response => {
      this.auth.loggedIn = true;
      this.router.navigate(['/books']);
    });
    
  }

}
