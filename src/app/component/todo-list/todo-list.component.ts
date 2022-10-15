import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/Model/itodo';
import { TodoService } from 'src/app/Services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
isloading:boolean=true;
todoList:ITodo[]=[];
  constructor(private todoservice:TodoService, private router:Router) {
   }
  Subscription!:Subscription;
  ngOnInit(): void {
    this.isloading=true;
    this.getAllTaske()
  //   this.todoservice.getAllTaskes().subscribe({
  //    next: (response)=>{
  //     this.todoList=response.Data;
  //     this.isloading=false;
  //     },
  //     error: (error)=>console.log(error)
  // })
 
  // this.FetchData()
  }
  // FetchData(){
  //  this.Subscription= this.todoservice.getAllTaskes().subscribe({
  //     next: (response)=>{
  //      this.todoList=response.Data;
  //      this.isloading=false;
  //      },
  //      error: (error)=>{
  //       console.log(error)
  //       if(error["status"]==401)
  //         this.router.navigate(["/todo/cteats"]);
  //      }
  //  })
  // }
  getAllTaske(){
    this.todoservice.getAllTaskes().subscribe({
      next:(res)=>{
        this.todoList=res.Data;
      this.isloading=false;
      },
      error:(err)=>{
        alert("Error has occured while feching the data!!! ")
      }
    })

  }
  delete(id:number){
      this.todoservice.deleteTask(id).subscribe(
        {
          next: (val)=>{
            this.getAllTaske()
          }
            // this.router.navigate(['/todo'])
            },
           
      )
  }
 
}
