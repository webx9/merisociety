import { Component, OnInit } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.page.html',
  styleUrls: ['./dispatch.page.scss'],
})
export class DispatchPage implements OnInit {

  constructor(private loadingController: LoadingController,private platform: Platform,private authenticationService: AuthenticationService,private router: Router) { 
    //this.presentLoading();
   }

  ngOnInit() {
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
      //duration: 20000
    });
    return await loading.present();
  }
  ionViewDidEnter(){
    this.authenticationService.authenticationState.subscribe(state => {
      if (state) {
        console.log("inside if, state=" + state);
        this.router.navigate(['home'], {skipLocationChange: true});
      } else {
        console.log("inside else, state=" + state);
        this.router.navigate(['signup1'], {skipLocationChange: true});
      }
    });
  }
}
