import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProejctDetailsComponent implements OnInit {
  isEdit: boolean = false;
  isAdd: boolean = false;
  showPopup: string = 'none';
  showBackdrop: string = 'none';
  @Output() changeShowPopupOutput = new EventEmitter<any>();
  @Input() projectData: any;
  task: any = {
    id: 0,
    title: '',
    description: '',
    status: '',
    comment: '',
  };
  tasks: any[] = [];
  date = new FormControl(new Date());

  constructor(private service: ProjectsService) {}

  ngOnInit() {
    this.tasks = this.service.getTasks();
  }

  closeParentPopup() {
    this.changeShowPopupOutput.emit();
  }

  changeShowPopup() {
    console.log('clicked!!');
    this.showPopup = this.showPopup === 'block' ? 'none' : 'block';
    this.showBackdrop = this.showBackdrop === 'grid' ? 'none' : 'grid';
  }

  changeIsAdd() {
    this.isAdd = !this.isAdd;
  }
}
