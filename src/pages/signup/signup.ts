import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {AuthService} from '../home/Authservice'
/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
newcreds = {
  name:'',
  password:''
}
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public authservice: AuthService) {}


  register(user){
    this.authservice.adduser(user).then(data =>{
      if(data){
        var alert = this.alertCtrl.create({
          title:'Success',
          subTitle:'User Created',
          buttons:['ok']
        });
        alert.present();
      }
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
