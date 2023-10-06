import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

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
    lead: '',
    pmo: '',
  };
  tasks$: Observable<any> = new Observable();
  date = new FormControl(new Date());

  constructor(private service: ProjectsService) {}

  ngOnInit() {
    this.updateTasks();
  }

  updateTasks() {
    this.service.getTasks(this.projectData.projectId).subscribe((e: any) => {
      // console.log('updateTasks: ', e);
      this.tasks$ = of(e[0].jobs);
    });
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

  addTask() {
    const taskObj = {
      Title: this.task.title,
      Description: this.task.description ?? '',
      status: this.task.status ?? '',
      Remarks: this.task.comment ?? '',
    };
    this.service.addTask(taskObj, this.projectData.projectId).subscribe();
    this.updateTasks();
    this.changeIsAdd();
  }
}
