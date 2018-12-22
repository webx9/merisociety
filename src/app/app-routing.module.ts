import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'categorydetails', loadChildren: './categorydetails/categorydetails.module#CategorydetailsPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'deliveryoption', loadChildren: './deliveryoption/deliveryoption.module#DeliveryoptionPageModule' },
  { path: 'orderconfirmation', loadChildren: './orderconfirmation/orderconfirmation.module#OrderconfirmationPageModule' },
  { path: 'offers', loadChildren: './offers/offers.module#OffersPageModule' },
  { path: 'hometab', loadChildren: './hometab/hometab.module#HometabPageModule' },
  { path: 'signup1', loadChildren: './signup1/signup1.module#Signup1PageModule' },
  { path: 'signup2', loadChildren: './signup2/signup2.module#Signup2PageModule' },
  { path: 'signup3', loadChildren: './signup3/signup3.module#Signup3PageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
