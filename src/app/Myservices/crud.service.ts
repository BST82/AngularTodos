import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../mymodels/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceUr!:string;

  constructor(private ss:HttpClient) {
    this.serviceUr="http://localhost:3000/tasks"
   }

   addTask(task:Task):Observable<Task>{
    return this.ss.post<Task>(this.serviceUr,task);
   }
   getAllTask():Observable<Task[]>{
    return this.ss.get<Task[]>(this.serviceUr);
   }
   deleteTask(task:Task):Observable<Task>{
    return this.ss.delete<Task>(this.serviceUr+'/'+task.id);
   }
   editTask(task:Task):Observable<Task>{
    return this.ss.put<Task>(this.serviceUr+'/'+task.id,task);
   }
}
