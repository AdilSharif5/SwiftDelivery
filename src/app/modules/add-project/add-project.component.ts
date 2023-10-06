import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectsService } from '../projects/services/projects.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  @Output() changeShowPopupOutput = new EventEmitter<any>();
  project: any = {
    name: '',
    description: '',
    lead: '',
    pmo: '',
    tasks: [],
  };
  taskObj: any = {
    id: 0,
    title: '',
    description: '',
    status: '',
    comment: '',
  };
  tasks: any[] = [];
  tempId: number = -1;

  constructor(
    private projectsService: ProjectsService,
    private loaderService: NgxUiLoaderService
  ) {}

  ngOnInit() {}

  changeShowPopup() {
    this.changeShowPopupOutput.emit();
  }

  addProjectHandler() {
    // this.project.tasks = this.tasks;
    // this.projectsService.addTask(this.taskObj);
    this.loaderService.start();
    this.projectsService
      .addProject({
        name: this.project.name,
        description: this.project.description,
        createdDate: new Date(),
      })
      .subscribe((e) => {
        this.loaderService.stop();
        this.changeShowPopup();
        location.reload();
      });
  }

  addTaskHandler() {
    // this.tempId++;
    // this.taskObj.id = this.tempId;
    // this.tasks.push(this.taskObj);
    // this.projectsService.addTask({
    //   Title: this.taskObj.title,
    //   Description: this.taskObj.description ?? '',
    //   status: this.taskObj.status ?? '',
    //   Remarks: this.taskObj.comment ?? '',
    // });
    this.taskObj = {
      id: 0,
      title: '',
      description: '',
      status: '',
      comment: '',
    };
  }

  updateTaskHandler(task: any) {
    task.isEdit = !task.isEdit;
    this.tasks = this.tasks.map((element) =>
      element.id === task.id ? task : element
    );
  }

  removeTaskHandler(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
