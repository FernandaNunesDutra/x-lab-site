import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // text-primary; text-blue; text-orange; text-yellow; text-red; text-info; text-pink; text-red
    { path: '/actions', title: 'Ações',  icon:'ni-air-baloon text-red', class: '' },
    { path: '/about-us', title: 'Sobre Nós',  icon:'ni-world-2 text-purple', class: '' },
    { path: '/patterns', title: 'Parceiros',  icon:'ni-shop text-yellow', class: '' },
    { path: '/social-media', title: 'Redes Sociais',  icon:'ni-planet text-pink', class: '' },
    { path: '/volunteers', title: 'Voluntários',  icon:'ni-favourite-28 text-blue', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
