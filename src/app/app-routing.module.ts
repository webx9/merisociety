import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [

  //{ path: '', redirectTo: 'signup1', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuardService], loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', canActivate: [AuthGuardService], loadChildren: './list/list.module#ListPageModule' },
  { path: 'profile', canActivate: [AuthGuardService], loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'orders', canActivate: [AuthGuardService], loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'category', canActivate: [AuthGuardService], loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'categorydetails', canActivate: [AuthGuardService], loadChildren: './categorydetails/categorydetails.module#CategorydetailsPageModule' },
  { path: 'cart', canActivate: [AuthGuardService], loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'deliveryoption', canActivate: [AuthGuardService], loadChildren: './deliveryoption/deliveryoption.module#DeliveryoptionPageModule' },
  { path: 'orderconfirmation', canActivate: [AuthGuardService], loadChildren: './orderconfirmation/orderconfirmation.module#OrderconfirmationPageModule' },
  { path: 'offers', canActivate: [AuthGuardService], loadChildren: './offers/offers.module#OffersPageModule' },
  { path: 'hometab', canActivate: [AuthGuardService], loadChildren: './hometab/hometab.module#HometabPageModule' },
  { path: 'signup1', loadChildren: './signup1/signup1.module#Signup1PageModule' },
  { path: 'signup2', loadChildren: './signup2/signup2.module#Signup2PageModule' },
  { path: 'signup3', loadChildren: './signup3/signup3.module#Signup3PageModule' },
  { path: 'dispatch', loadChildren: './dispatch/dispatch.module#DispatchPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
