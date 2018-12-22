import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Tabs, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  @ViewChild('myTabs') tabRef: Tabs;
  count: number;
  isOn: boolean;
  constructor(private router: Router,public navCtrl: NavController,private Toast: ToastController){
    this.count = 0;
    this.isOn = false;
  }
  public ionViewDidEnter(): void
  {
    this.tabRef.select('home');
  }
  incrementCnt()
  {
    if(this.count < 12)
    {
      this.count = this.count + 1;
      this.isOn = true;
    }
    else
    {
      this.presentToast("Maximum quantity is 12 per user");
    }
  }
  async presentToast(msg) {
    const toast = await this.Toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  decrementCnt()
  {
    if(this.count > 0)
    {
      this.count = this.count - 1;
    }
    if(this.count == 0)
    {
      this.isOn = false;
    }
  }
}
