import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../service/userService';
import { User } from '../../model/user';
import { DB } from '../../db'
// import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService, DB]
})
export class LoginPage {
  registerCredentials = { email: '', password: '' };

  constructor(private nav: NavController, private userService: UserService) { }

  userName: string
  password: string
  message: string
  errMsg: string = 'Invalid username or password.'
  user: User

  ngOnInit() {
    DB.initDB();
    this.user = DB.getActiveUser();
  }

  login(name: string) { //pass in string here of name to get user  

    if (name == '' || name == undefined) {
      this.message = 'Please enter a username.'
    } else {
      this.userService
        .getUser(name)
        .subscribe((data) => this.authenticate(data))
    }
  }


  authenticate(data: User) {

    if (this.validUser(data)) {

      this.user = data
      this.debugStatements(data);

      if (this.user.password == this.password) {
        this.message = 'Welcome ' + this.user.firstName + '!'
        // console.log('ZAC TESTING: ' );
        // console.log(this.user);
        DB.setActiveUser(this.user);

      } else this.message = this.errMsg

    } else this.message = this.errMsg

  }

  validUser(data: User) {
    if (data != null) {
      return true;
    }
    return false;
  }


  debugStatements(data: User) {

    console.log('Authenticating:');
    console.log('User information from Firebase:');
    console.log(data);

    console.log('Data entered into form:');
    console.log('userName: ' + this.userName);
    console.log('password: ' + this.password);
  }




}

