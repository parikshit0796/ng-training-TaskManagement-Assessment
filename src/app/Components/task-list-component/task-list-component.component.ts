import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponentComponent implements OnInit{

  tasks: Task[] = [];
  currentPage: number = 1;  
  tasksPerPage: number = 5; 
  selectedTasks: Set<string> = new Set(); 
  selectAllChecked: boolean = false;

  showDeleteModal: boolean = false;  
  taskIdToDelete: string | null = null; 

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  openDeleteModal(taskId: string): void {
    this.taskIdToDelete = taskId;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.taskIdToDelete = null;
  }

  confirmDeleteTask(): void {
    if (this.taskIdToDelete) {
      this.taskService.deleteTask(this.taskIdToDelete);
      this.tasks = this.taskService.getTasks(); 
    }
    this.closeDeleteModal();
  }

  get paginatedTasks(): Task[] {
    const startIndex = (this.currentPage - 1) * this.tasksPerPage;
    return this.tasks.slice(startIndex, startIndex + this.tasksPerPage);
  }

  goToNextPage(): void {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.tasks.length / this.tasksPerPage);
  }

  toggleSelectAll(event: any): void {
    this.selectAllChecked = event.target.checked;
    this.selectedTasks.clear();
    if (this.selectAllChecked) {
      this.paginatedTasks.forEach(task => this.selectedTasks.add(task.id));
    }
  }

  toggleSelectTask(id: string, event: any): void {
    if (event.target.checked) {
      this.selectedTasks.add(id);
    } else {
      this.selectedTasks.delete(id);
      this.selectAllChecked = false;
    }
  }

  isTaskSelected(id: string): boolean {
    return this.selectedTasks.has(id);
  }

  get totalRecords(): number {
    return this.tasks.length;
  }

  

}
