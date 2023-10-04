import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  taskListDisplay: string = 'none';
  sidebarisplay: string = 'block';
  hamMenuClass: string[] = ['ham-menu'];
  showPopup: boolean = false;
  showProject: string = 'none';
  showBackdrop: string = 'hidden';
  projectData: any;
  date = new FormControl(new Date());
  projects$: Observable<any> = new Observable();
  newProjectBarColor: string = '';

  constructor(private service: ProjectsService) {}

  ngOnInit() {
    this.projects$ = this.service.getProjects();
    this.projects$.subscribe((e) =>
      e.forEach((element: any) => {
        const generatedColor = this.generateRandomColor();
        element.barColor = generatedColor.rgb;
        element.backgroundColor = generatedColor.rgba;
      })
    );
  }

  changeShowPopup(projectData: any) {
    console.log('clicked!!', projectData);
    if (projectData) this.projectData = projectData;
    this.showPopup = !this.showPopup;
    this.showBackdrop = this.showBackdrop === 'visible' ? 'hidden' : 'visible';
  }

  changeShowProject(projectData: any) {
    if (projectData) this.projectData = projectData;
    this.showProject = this.showProject === 'block' ? 'none' : 'block';
  }

  changeSidebarDisplay(element: any) {
    // Not working menu icon is not updating, check later!
    this.hamMenuClass.includes('ham-menu-hide')
      ? this.hamMenuClass.pop()
      : this.hamMenuClass.push('ham-menu-hide');
    console.log(this.hamMenuClass);
    this.sidebarisplay = this.sidebarisplay === 'block' ? 'none' : 'block';
  }

  hexToRGB(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // return {r, g, b}
    // console.log(r, g, b);
    return { r, g, b };
  }

  generateRandomColor() {
    const maxVal = 0xffffff; // alternative to this is 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);

    let randomNumberStr = randomNumber.toString(16);
    let randColor = randomNumberStr.padStart(6, '0');
    let backgroundColorRGB = this.hexToRGB(`#${randColor.toUpperCase()}`);

    const { r, g, b } = backgroundColorRGB;

    if ((r === 0 && g === 0 && b === 0) || (r === 1 && g === 1 && b === 1)) {
      randomNumberStr = randomNumber.toString(16);
      randColor = randomNumberStr.padStart(6, '0');
      backgroundColorRGB = this.hexToRGB(`#${randColor.toUpperCase()}`);
    }

    this.newProjectBarColor = `rgb(${backgroundColorRGB.r}, ${backgroundColorRGB.g}, ${backgroundColorRGB.b})`;

    return {
      rgba: `rgba(${backgroundColorRGB.r}, ${backgroundColorRGB.g}, ${backgroundColorRGB.b}, 0.2)`,
      rgb: `rgb(${backgroundColorRGB.r}, ${backgroundColorRGB.g}, ${backgroundColorRGB.b})`,
    };
  }

  fetchProjectsHandler() {
    this.projects$ = this.service.getProjects();
  }
}
