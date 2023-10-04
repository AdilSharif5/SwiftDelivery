import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  @Output() changeShowPopupOutput = new EventEmitter<any>();
  showPassword: boolean = false; // used in UI

  constructor() {}

  ngOnInit() {}

  changeShowPopup() {
    this.changeShowPopupOutput.emit();
  }
}
