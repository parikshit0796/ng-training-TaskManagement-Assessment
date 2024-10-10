import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskFormComponentComponent } from 'src/app/Components/task-form-component/task-form-component.component';
import { TaskListComponentComponent } from 'src/app/Components/task-list-component/task-list-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskFormComponentComponent,
    TaskListComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ], 
})
export class TaskModule { }
