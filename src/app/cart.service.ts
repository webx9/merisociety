import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private data = [
    {
      category: 'Fresh Vegetables',
      products: [
        { id: 0, name: 'Potato/Batata/Aloo', image: 'potato.jpg', msp: '30', mrp: '60', 
          attributes: 
          [
            { id:0, attr: "1 Kg", price: 30 },
            { id:1, attr: "5 Kg", price: 140 },
            { id:2, attr: "10 Kg", price: 270 }
          ]},
        { id: 1, name: 'Onion/Kanda/Pyaz', image: 'onion.jpg', msp: '14', mrp: '28', 
        attributes: 
        [
          { id:0, attr: "1 Kg", price: 14 },
          { id:1, attr: "2 Kg", price: 28 },
          { id:2, attr: "5 Kg", price: 70 }
        ] },
        { id: 2, name: 'Cauliflower/Fulgobi', image: 'flower.jpg', msp: '25', mrp: '50', 
        attributes: 
        [
          { id:0, attr: "250 gm", price: 25 },
          { id:1, attr: "500 gm", price: 50 },
          { id:2, attr: "2 Kg", price: 100 }
        ] },
        { id: 3, name: 'Cabbage/Pattagobi', image: 'cabbage.jpg', msp: '45', mrp: '90', 
        attributes: 
        [
          { id:0, attr: "100 gm", price: 45 },
          { id:1, attr: "1 Kg", price: 90 },
          { id:2, attr: "5 Kg", price: 225 }
        ] }
      ]
    }
  ];
  private cart = [];
  constructor() { }
  getProducts() {
    return this.data;
  }
  getCart() {
    return this.cart;
  }
  addProduct(product) {
    this.cart.push(product);
  }
}
