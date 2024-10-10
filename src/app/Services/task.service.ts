import { Injectable } from '@angular/core';

import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];

  constructor(){
    let savedTasks = localStorage.getItem("tasks");
    this.tasks = savedTasks? JSON.parse(savedTasks) : [];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: string): Task | undefined{
    return this.tasks.find(task => task.id === id);
  }

  addTask(task: Task): void {
    task.id = Date.now().toString();
    this.tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  updateTask(id: string, updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = { ...updatedTask, id }; // Preserve the original task id
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  //DUE TO THE POSTMAN COULDNT MANIPULATE DATE BY ITSELF ON SERVING FRONTEND REQUEST 
  //THE DATA STORE ON LOCAL STORAGE BELOW IS THE CODE FOR BACKEND API
  
  // private apiUrl = "https://f40329a5-c9b2-489b-a48d-3766f4657ee1.mock.pstmn.io"

  // private tasks: Task[] = [];

  // constructor( private http: HttpClient){}

  // getTasks(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.apiUrl + "/task-list" );
  // }

  // getTask(id: string): Observable<Task> {
  //   return this.http.get<Task>(this.apiUrl + "/list/"+id);
  // }

  // addTask(task: Task): Observable<void> {
  //   return this.http.post<void>(this.apiUrl + "/add-task/", task);
  // }

  // deleteTask(id: string): Observable<void> {
    
  //   return this.http.delete<void>(this.apiUrl + "/delete-task/"+id);
  // }

  // updateTask(id: string, updatedTask: Task): Observable<void> {
  //   return this.http.put<void>(this.apiUrl + "/edit-list/" + id, updatedTask);

  // }
}
