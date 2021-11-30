import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor( 
    private router: Router
  ) { }
  
  userName: string | undefined;
  password: any;
  errorDisplay: string | undefined

  ngOnInit(): void {
  }

  redirect() {
    console.log('works');
    console.log(this.userName, this.password);
    
    if (this.userName && this.password) {
      const user: any = {
        username: this.userName,
        pass: this.password
      };
      this.router.navigate(['homePage'], {state: user});
    } else {
      this.errorDisplay = '<p>Username / Email and Password should not be Empty</p>';
    }
  }
}
