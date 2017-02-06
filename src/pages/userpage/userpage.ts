import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {AuthService} from "../home/Authservice";

/*
  Generated class for the Username page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-userpage',
  templateUrl: 'userpage.html'
})
export class Userpage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice:AuthService , public alertCtrl: AlertController) {}

  logout(){
    this.authservice.logout();
    this.navCtrl.setRoot(HomePage);
  }

  getinfo(){
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsernamePage');
  }

}
