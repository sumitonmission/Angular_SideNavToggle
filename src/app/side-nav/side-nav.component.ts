import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-home'
    },
    {
      number: '2',
      name: 'Analytics',
      icon: 'fa-solid fa-chart-line'
    },
    {
      number: '3',
      name: 'Products',
      icon: 'fa-brands fa-product-hunt'
    },
    {
      number: '4',
      name: 'Orders',
      icon: 'fa-solid fa-cart-shopping'
    },
    {
      number: '5',
      name: 'Settings',
      icon: 'fa-solid fa-gear'
    },
  ]
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
