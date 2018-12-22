import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.page.html',
  styleUrls: ['./signup1.page.scss'],
})
export class Signup1Page implements OnInit {
  isOn: boolean;
  flatNumber: any;
  wingBlock: any;
  constructor() { 
    this.isOn = false;
  }

  ngOnInit() {
  }
  societyOptions: any = {
    header: 'Select your society',
    };
  wingOptions: any = {
    header: 'Select your building',
    };
  flatOptions: any = {
    header: 'Select flat number',
    };
  private getBldgList()
  {
    //alert("test");
  }
  private getFlatList()
  {
    //alert("test 2");
  }
  private getSocietyDetails()
  {
    //alert("test 3");
    this.isOn = true;
  }
}
