import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ComParentChildService } from '../services/com-parent-child.service';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username_taken: boolean = true;
  model = {
    firstname: '',
    username: '',
    password: ''
  };
  constructor(private auth: AuthService, private router: Router, private comParentChild: ComParentChildService) { }

  ngOnInit() {
  }

  register(){
    let formData = {
      firstname: this.model.firstname,
      username: this.model.username,
      password: this.model.password,
    }

    console.log(formData);
    
    
    this.auth.register(formData).subscribe(response => {
      this.auth.loggedIn = true;
      this.router.navigate(['/books']);
      //this.comParentChild.publish('getDataEvent');
    });
    
  }

  checkUsername(){
    this.auth.checkUsername(this.model.username).subscribe((response:any) => {
      response.username_taken ? this.username_taken = true : this.username_taken = false;
    });
    
  }

}
