import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthService} from './Authservice';
import {Userpage} from '../userpage/userpage';
import {SignupPage} from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    usercreds = {
      name: '',
      password: ''
    };
  constructor(public navCtrl: NavController, public authservice: AuthService) {

  }

  login(user) {
    this.authservice.authenticate(user).then(data => {
      if(data) {
        this.navCtrl.setRoot(Userpage);
      }
    });
  }
  signup() {
    this.navCtrl.push(SignupPage);
  }
}
