import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'My Profile',
      url: '/profile',
      icon: 'contact'
    },
    {
      title: 'My Orders',
      url: '/orders',
      icon: 'cash'
    }/*,
    {
      title: 'Sign Up 1',
      url: '/signup1',
      icon: 'cash'
    },
    {
      title: 'Sign Up 2',
      url: '/signup2',
      icon: 'cash'
    },
    {
      title: 'Shop by Category',
      url: '/category',
      icon: 'basket'
    }*/
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    console.log("inside init");
    this.platform.ready().then(() => {
      console.log("inside platform ready");
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authenticationService.authenticationState.subscribe(state => {
        if (state) {
          console.log("inside if, state=" + state);
          this.router.navigate(['home'], {skipLocationChange: true});
        } else {
          console.log("inside else, state=" + state);
          this.router.navigate(['signup1'], {skipLocationChange: true});
        }
      });

    });
  }
}
