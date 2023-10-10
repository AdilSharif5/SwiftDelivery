import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectId: number = 6;
  taskId: number = 2;
  projects: Observable<any> = new Observable();
  // projects: any = [
  //   {
  //     id: 0,
  //     title:
  //       'California Fair Fair PlanCalifornia Fair PlaPlanCaliforniaPlanCaliforniaPlanCalifornia nCalifornia Fair Plan',
  //     desc: 'commercial/homeowners',
  //     completed: 100,
  //     involvedPeople: [
  //       { name: 'Sowjanya', role: 'PMO' },
  //       { name: 'Upanshu', role: 'Lead' },
  //     ],
  //     totalTasks: 10,
  //   },
  //   {
  //     id: 1,
  //     title: 'SafePoint',
  //     desc: 'homeowners',
  //     completed: 40,
  //     involvedPeople: [
  //       { name: 'Sowjanya', role: 'PMO' },
  //       { name: 'Upanshu', role: 'Lead' },
  //     ],
  //     totalTasks: 10,
  //   },
  //   {
  //     id: 2,
  //     title: 'Cajun',
  //     desc: 'homeowners',
  //     completed: 30,
  //     involvedPeople: [
  //       { name: 'Sowjanya', role: 'PMO' },
  //       { name: 'Upanshu', role: 'Lead' },
  //     ],
  //     totalTasks: 10,
  //   },
  //   {
  //     id: 3,
  //     title: 'NOVO',
  //     desc: 'pauto',
  //     completed: 90,
  //     involvedPeople: [
  //       { name: 'Sowjanya', role: 'PMO' },
  //       { name: 'Upanshu', role: 'Lead' },
  //     ],
  //     totalTasks: 10,
  //   },
  //   {
  //     id: 4,
  //     title: 'ISMIE',
  //     desc: 'medical',
  //     completed: 55,
  //     involvedPeople: [
  //       { name: 'Sowjanya', role: 'PMO' },
  //       { name: 'Upanshu', role: 'Lead' },
  //     ],
  //     totalTasks: 10,
  //   },
  //   {
  //     id: 5,
  //     title: 'Indigo',
  //     desc: 'pauto',
  //     completed: 55,
  //     involvedPeople: [
  //       { name: 'Sowjanya', role: 'PMO' },
  //       { name: 'Upanshu', role: 'Lead' },
  //     ],
  //     totalTasks: 10,
  //   },
  //   {
  //     id: 6,
  //     title: 'Cumberland',
  //     desc: 'commercial',
  //     completed: 55,
  //     involvedPeople: [
  //       { name: 'Sowjanya', role: 'PMO' },
  //       { name: 'Upanshu', role: 'Lead' },
  //     ],
  //     totalTasks: 10,
  //   },
  // ];
  tasks: any[] = [
    {
      id: 0,
      title: 'UI Design',
      description: 'Create easy and simple UI design',
      status: 'done',
      comment: '',
    },
    {
      id: 1,
      title: 'UI Design',
      description: 'Create easy and simple UI design',
      status: 'pending',
      comment: 'Almost done',
    },
    {
      id: 2,
      title: 'UI Design',
      description: 'Create easy and simple UI design',
      status: 'not done',
      comment: "Haven't picked yet!",
    },
  ];
  adminApi: string = 'https://localhost:7110/admin';
  userApi: string = 'https://localhost:7110/user';
  readonly headers = new HttpHeaders({
    Accept: 'application/json',
  });

  constructor(private readonly http: HttpClient) {}

  getProjects() {
    const res = this.http.get(this.adminApi + '/projects', {
      headers: this.headers,
    });
    this.projects = res;
    // return of(this.projects);
    return res;
  }

  addProject(project: any) {
    return this.http.post(`${this.adminApi}/projects`, project);
    // const availableDuplicates = this.checkDuplicates({
    //   from: this.projects,
    //   args: ['name'],
    //   values: [project.name],
    // // });
    // this.projectId++;
    // project.id = this.projectId;
    // this.projects.push(project);
    // console.log(this.projects);
  }

  updateProject(project: any) {
    // this.projects = this.projects.subscribe.map((projectElement) => {
    //   if (projectElement.id === project.id) {
    //     return project;
    //   }
    //   return projectElement;
    // });
  }

  removeProject(id: number) {
    // this.projects = this.projects.filter((project) => project.id !== id);
  }

  /** Somes issues fix them later and try to implement this, when free! **/
  // checkDuplicates(options: any) {
  //   const sameArgs: any = {};
  //   let { from, args, values } = options; // from -> object, args -> ['key1', 'key2'], values -> ['value1', 'value2']

  //   console.log(this.projectExists(values[0]));
  //   // args.forEach((element: any, index: number) => {
  //   //   console.log(
  //   //     'for debuging: ',
  //   //     from,
  //   //     args,
  //   //     values,
  //   //     from[element],
  //   //     values[index],
  //   //     from[element] === values[index]
  //   //   );
  //   //   if (from[element] === values[index]) {
  //   //     sameArgs[element] = values[index];
  //   //   }
  //   // });
  //   // if (Object.values(sameArgs).length > 0) {
  //   //   return `${sameArgs.name} are already used!`;
  //   // }
  //   // return null;
  // }

  // projectExists(projectName: string, exists: boolean) {
  //   this.projects.subscribe((e) => {
  //     console.log(e);
  //     exists = e.any(
  //       (project: any) =>
  //         project.name.toLowerCase() === projectName.toLowerCase()
  //     );
  //     // return exists;
  //   });
  // }

  getTasks(projectId: number) {
    return this.http.get(`${this.adminApi}/Projects/${projectId}/jobs`, {
      headers: this.headers,
    });
    // return [...this.tasks];
  }

  addTask(task: any, projectId: number) {
    return this.http.post(`${this.userApi}/projects/${projectId}/jobs`, task, {
      headers: this.headers,
    });
    // this.taskId++;
    // task.id = this.taskId;
    // this.tasks.push(task);
  }

  updateTask(task: any, projectId: number) {
    return this.http
      .put(`${this.userApi}/Projects/${projectId}/jobs/${task.jobID}`, task, {
        headers: this.headers,
      })
      .subscribe();
    // this.tasks = this.tasks.map((taskElement) => {
    //   if (taskElement.id === task.id) {
    //     return task;
    //   }
    //   return taskElement;
    // });
  }

  removeTask(id: number) {
    return this.http.delete(`${this.userApi}/jobs/${id}`).subscribe();
    this.tasks = this.tasks.filter((task) => parseInt(task.id) !== id);
  }
}
