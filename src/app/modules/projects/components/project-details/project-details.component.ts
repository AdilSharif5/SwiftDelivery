import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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
  tasks: any[] = [];
  date = new FormControl(new Date());

  constructor(
    private service: ProjectsService,
    private loaderService: NgxUiLoaderService
  ) {}

  ngOnInit() {
    this.updateTasks();
  }

  updateTasks() {
    return this.service
      .getTasks(this.projectData.projectId)
      .subscribe((e: any) => {
        console.log('updateTasks: ', e);
        this.tasks = e.jobs;
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
    this.loaderService.start();
    const taskObj = {
      Title: this.task.title,
      Description: this.task.description ?? '',
      status: this.task.status ?? '',
      Remarks: this.task.comment ?? '',
    };
    this.service.addTask(taskObj, this.projectData.projectId).subscribe();
    this.updateTasks();
    this.updateTasks();
    this.updateTasks();
    this.changeIsAdd();
    this.loaderService.stop();
    this.task = {
      id: 0,
      title: '',
      description: '',
      status: '',
      comment: '',
      lead: '',
      pmo: '',
    };
  }

  updateTask(task: any) {
    task.isEdit = !task.isEdit;
    console.log(task);
    const taskObj = {
      jobID: task.jobId,
      Title: task.title,
      Description: task.description ?? '',
      status: task.status ?? '',
      Remarks: task.remarks ?? '',
    };
    this.service.updateTask(taskObj, this.projectData.projectId);
  }

  removeTask(task: any) {
    this.service.removeTask(task.jobId);
  }
}
