import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Userpage } from '../pages/userpage/userpage';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../pages/home/Authservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    Userpage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    Userpage
  ],
 // providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
  providers:[AuthService]
})
export class AppModule {}
