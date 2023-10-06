import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  activeInd: number = 0;
  showpopUp: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.updateActiveIcon();
  }

  updateActiveIcon() {
    const currUrl = this.router.url;
    const iconBtns = document.querySelectorAll('.icon-btn');
    if (currUrl.includes('users')) {
      this.activeInd = 1;
    }
    const element = Array.from(iconBtns)[this.activeInd];
    if (!element.classList.contains('btn-active')) {
      element.classList.add('btn-active');
    }
  }

  changeActiveIcon(element: any) {
    const targetele =
      element.target.parentElement.tagName === 'A'
        ? element.target
        : element.target.parentElement;
    const iconBtns = document.querySelectorAll('.icon-btn');
    if (!targetele.classList.contains('btn-active')) {
      Array.from(iconBtns).forEach((btn) => {
        btn.classList.remove('btn-active');
      });
      targetele.classList.add('btn-active');
    }
  }
}
