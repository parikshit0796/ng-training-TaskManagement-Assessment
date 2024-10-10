import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/Services/task.service';
import { Task } from 'src/app/Models/task';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { Status } from 'src/app/Models/status';
import { Priority } from 'src/app/Models/priority';

@Component({
  selector: 'app-task-form-component',
  templateUrl: './task-form-component.component.html',
  styleUrls: ['./task-form-component.component.css'],
})
export class TaskFormComponentComponent {
  taskForm: FormGroup = new FormGroup({});
  taskId: string | null = null;
  task: Task | undefined;

  users = Object.values(User); 
  statuses = Object.values(Status); 
  priorities = Object.values(Priority); 

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.taskForm = this.formBuilder.group({
      user: [null, Validators.required], 
      status: [null, Validators.required],
      dueDate: ['', Validators.required],
      priority: [null, Validators.required],
      comment: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.taskId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.taskId) {
      this.task = this.taskService.getTask(this.taskId);
      if (this.task) {
        this.taskForm.patchValue({
          user: this.task.user, 
          status: this.task.status,
          dueDate: this.task.dueDate,
          priority: this.task.priority,
          comment: this.task.comment,
        });
      }
    }
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const task: Task = this.taskForm.value;

      if (this.taskId) {
        this.taskService.updateTask(this.taskId, task);
      } else {
        this.taskService.addTask(task);
      }

      this.router.navigate(['/']);
    }
  }

  closeModal(): void {
    this.router.navigate(['/']);
  }
}
