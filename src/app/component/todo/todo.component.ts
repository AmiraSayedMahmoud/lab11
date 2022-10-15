import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITodoUpdate } from 'src/app/Model/itodo';
import { TodoService } from 'src/app/Services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number=0;
  td?:ITodoUpdate;
  updateform: FormGroup;
  constructor(private active:ActivatedRoute,private todoservice:TodoService, private router:Router) {
    this.updateform = new FormGroup(
      {
        Title: new FormControl(this.td?.Title??"", [Validators.required,Validators.maxLength(100)]),
        ID: new FormControl(this.td?.ID??this.id, [Validators.required]),
        IsDone: new FormControl(this.td?.IsDone??"", [Validators.required]),
      })
   }

  ngOnInit(): void {
    this.id=Number(this.active.snapshot.paramMap.get('id'))
    console.log(this.id)
  }
  update(){
    this.td = this.updateform.value as ITodoUpdate
    
      this.todoservice.updateTask(this.td).subscribe({
   
        next:(value) =>{
         alert("susccefully update")
          this.router.navigateByUrl("/todo")
        },
        error:(error)=>{
          console.log(error)
        }
      })
      }
    }
   
  
 