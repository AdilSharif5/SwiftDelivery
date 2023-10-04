import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectId: number = 6;
  taskId: number = 2;
  projects = [
    {
      id: 0,
      title:
        'California Fair Fair PlanCalifornia Fair PlaPlanCaliforniaPlanCaliforniaPlanCalifornia nCalifornia Fair Plan',
      desc: 'commercial/homeowners',
      completed: 100,
      involvedPeople: [
        { name: 'Sowjanya', role: 'PMO' },
        { name: 'Upanshu', role: 'Lead' },
      ],
      totalTasks: 10,
    },
    {
      id: 1,
      title: 'SafePoint',
      desc: 'homeowners',
      completed: 40,
      involvedPeople: [
        { name: 'Sowjanya', role: 'PMO' },
        { name: 'Upanshu', role: 'Lead' },
      ],
      totalTasks: 10,
    },
    {
      id: 2,
      title: 'Cajun',
      desc: 'homeowners',
      completed: 30,
      involvedPeople: [
        { name: 'Sowjanya', role: 'PMO' },
        { name: 'Upanshu', role: 'Lead' },
      ],
      totalTasks: 10,
    },
    {
      id: 3,
      title: 'NOVO',
      desc: 'pauto',
      completed: 90,
      involvedPeople: [
        { name: 'Sowjanya', role: 'PMO' },
        { name: 'Upanshu', role: 'Lead' },
      ],
      totalTasks: 10,
    },
    {
      id: 4,
      title: 'ISMIE',
      desc: 'medical',
      completed: 55,
      involvedPeople: [
        { name: 'Sowjanya', role: 'PMO' },
        { name: 'Upanshu', role: 'Lead' },
      ],
      totalTasks: 10,
    },
    {
      id: 5,
      title: 'Indigo',
      desc: 'pauto',
      completed: 55,
      involvedPeople: [
        { name: 'Sowjanya', role: 'PMO' },
        { name: 'Upanshu', role: 'Lead' },
      ],
      totalTasks: 10,
    },
    {
      id: 6,
      title: 'Cumberland',
      desc: 'commercial',
      completed: 55,
      involvedPeople: [
        { name: 'Sowjanya', role: 'PMO' },
        { name: 'Upanshu', role: 'Lead' },
      ],
      totalTasks: 10,
    },
  ];
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

  constructor() {}

  getProjects() {
    return of(this.projects);
  }

  addProject(project: any) {
    this.projectId++;
    project.id = this.projectId;
    this.projects.push(project);
    console.log(this.projects);
  }

  updateProject(project: any) {
    this.projects = this.projects.map((projectElement) => {
      if (projectElement.id === project.id) {
        return project;
      }
      return projectElement;
    });
  }

  removeProject(id: number) {
    this.projects = this.projects.filter((project) => project.id !== id);
  }

  getTasks() {
    return [...this.tasks];
  }

  addTask(task: any) {
    this.taskId++;
    task.id = this.taskId;
    this.tasks.push(task);
  }

  updateTask(task: any) {
    this.tasks = this.tasks.map((taskElement) => {
      if (taskElement.id === task.id) {
        return task;
      }
      return taskElement;
    });
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => parseInt(task.id) !== id);
  }
}
