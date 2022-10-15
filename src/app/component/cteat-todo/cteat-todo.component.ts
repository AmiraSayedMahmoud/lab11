import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITodoPost } from 'src/app/Model/itodo';
import { TodoService } from 'src/app/Services/todo.service';


@Component({
  selector: 'app-cteat-todo',
  templateUrl: './cteat-todo.component.html',
  styleUrls: ['./cteat-todo.component.css']
})
export class CteatTodoComponent implements OnInit {
  addform: FormGroup;
  td?:ITodoPost;
  constructor(private todoservice:TodoService,private router: Router) { 
    this.addform = new FormGroup(
      {
        Title: new FormControl(this.td?.Title??"ITI", [Validators.required,Validators.maxLength(100)]),
      })
  }


  ngOnInit(): void {
  }
  add(){
    this.td = this.addform.value as ITodoPost
    this.todoservice.addTask(this.td).subscribe(
      {
        next:(value) =>{
          console.log(value)
          this.router.navigateByUrl("/todo")
        },
        error:(error)=>{
          console.log(error)
        }
      }
    )
  }

}
