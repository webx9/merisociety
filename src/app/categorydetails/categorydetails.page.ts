import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.page.html',
  styleUrls: ['./categorydetails.page.scss'],
})
export class CategorydetailsPage implements OnInit {
  count: number;
  isOn: boolean;
  cart = [];
  items = [];
  attributePrice: any;

  constructor(private Toast: ToastController,private storage: Storage,private cartService: CartService) { 
    this.count = 0;
    this.isOn = false;
  }

  ngOnInit() {
    this.items = this.cartService.getProducts();
    console.log(this.items[0]);
    console.log(this.items[0].products[0].attributes);
  }
  addToCart(product) {
    this.cartService.addProduct(product);
  }
  incrementCnt()
  {
    if(this.count < 12)
    {
      this.count = this.count + 1;
      this.isOn = true;
      /*this.storage.set("Item"+this.count,this.count);
      this.storage.get("Item"+this.count).then(res=>{
        console.log(res);
      });*/
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
      /*this.storage.get("Item"+this.count).then(res=>{
        console.log(res);
      });*/
    }
    if(this.count == 0)
    {
      this.isOn = false;
    }
  }
}
