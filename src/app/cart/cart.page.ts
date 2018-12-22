import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  count: number;
  isOn: boolean;
  constructor(private Toast: ToastController) { 
    this.count = 0;
    this.isOn = false;
  }

  ngOnInit() {
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
