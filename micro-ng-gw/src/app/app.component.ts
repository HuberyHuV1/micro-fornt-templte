import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'micro-app-angular';

  isCollapsed = false;
  constructor(){
    console.log('2323232');
  }
  menus = [
    {
      key: "angulargw",
      route: "/",
      title: "主页"
    },
    // {
    //   key: "angulargw-list",
    //   route: "/angulargw/list",
    //   title: "列表页"
    // }
  ]

  get currentRoute() {
    const menu = this.menus.find(item => item.route === window.location.pathname)
    return menu ? menu.key : "angulargw";
  }
}
