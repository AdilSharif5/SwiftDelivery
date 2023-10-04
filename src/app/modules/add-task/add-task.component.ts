import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() changeShowPopupOutput = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  changeShowPopup() {
    this.changeShowPopupOutput.emit();
  }

}
