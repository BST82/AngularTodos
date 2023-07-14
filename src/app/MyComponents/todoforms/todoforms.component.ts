import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Myservices/crud.service';
import { Task } from 'src/app/mymodels/task';

@Component({
  selector: 'app-todoforms',
  templateUrl: './todoforms.component.html',
  styleUrls: ['./todoforms.component.css']
})
export class TodoformsComponent implements OnInit {

  taskobj:Task=new Task();
  taskArr:Task[]=[];

  addTaskResult:string='';
  editTaskValue:string='';
  
 constructor(private taskservice:CrudService){}

 ngOnInit():void{
  this.editTaskValue='';
  this.addTaskResult='';
this.taskobj=new Task();
this.taskArr=[];
this.getAllTask();
 }

 getAllTask(){
  this.taskservice.getAllTask().subscribe(res=>{
this.taskArr=res;
  },err=>{
    alert("unable to get data");
  })
 }

 addTask(){
  this.taskobj.taskName=this.addTaskResult;
  this.taskservice.addTask(this.taskobj).subscribe(res=>{
this.ngOnInit();
this.addTaskResult='';
  },err=>{
    alert(err);
  })
 }

 editTask(){
  this.taskobj.taskName=this.editTaskValue;
  this.taskservice.editTask(this.taskobj).subscribe(res=>{
    this.editTaskValue='';
    this.ngOnInit();
  },err=>{
    alert(err);
  })
 }

 deleteTask(tt:Task){
  this.taskservice.deleteTask(tt).subscribe(res=>{
 this.ngOnInit();
  },err=>{
    alert('fail to delete');
  })
 }

 call(t:Task){
  this.taskobj=t;
  this.editTaskValue=t.taskName;
 }
}
