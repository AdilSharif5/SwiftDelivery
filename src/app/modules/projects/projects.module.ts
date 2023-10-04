import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsService } from './services/projects.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { AddProjectComponent } from '../add-project/add-project.component';
import { ProejctDetailsComponent } from './components/project-details/project-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [{ path: '', component: ProjectComponent }];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  exports: [ProjectComponent],
  declarations: [
    ProjectComponent,
    ProejctDetailsComponent,
    AddTaskComponent,
    AddProjectComponent,
  ],
  providers: [ProjectsService],
})
export class ProjectModule {}
