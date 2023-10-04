import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  sidebarisplay: string = 'block';
  isHamMenuInverted: boolean = this.sidebarisplay === 'block';
  hamMenuClass: string[] = ['ham-menu'];
  @Output() changeSidebarDisplayOutput = new EventEmitter<any>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  changeSidebarDisplay() {
    // Not working menu icon is not updating, check later!
    // document.querySelector('.ham-menu')?.classList.toggle('ham-menu-inverted');
    // console.log(this.hamMenuClass);
    this.isHamMenuInverted = !this.isHamMenuInverted;
    // Manually trigger change detection to update the UI
    this.cdr.detectChanges();
    this.sidebarisplay = this.sidebarisplay === 'block' ? 'none' : 'block';
    this.changeSidebarDisplayOutput.emit();
  }
}
