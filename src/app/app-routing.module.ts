import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponentComponent } from './Components/task-form-component/task-form-component.component';
import { TaskListComponentComponent } from './Components/task-list-component/task-list-component.component';

const routes: Routes = [
{ path:"", component: TaskListComponentComponent},
{ path:"new", component: TaskFormComponentComponent},
{ path:"edit/:id", component: TaskFormComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
