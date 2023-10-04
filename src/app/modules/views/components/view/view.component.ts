import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  sidebarDisplay: string = 'block';
  hamMenuClass: string[] = ['ham-menu'];
  constructor() {}

  ngOnInit() {}

  changeSidebarDisplay() {
    // Not working menu icon is not updating, check later!
    this.hamMenuClass.includes('ham-menu-hide')
      ? this.hamMenuClass.pop()
      : this.hamMenuClass.push('ham-menu-hide');
    // console.log(this.hamMenuClass);
    this.sidebarDisplay = this.sidebarDisplay === 'block' ? 'none' : 'block';
  }
}
