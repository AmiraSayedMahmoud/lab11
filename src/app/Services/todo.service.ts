import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITodo, ITodoPost, ITodoUpdate } from '../Model/itodo';
import { ApiResponse } from '../Viewmodel/Apiresult';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient ) { 
  }
  getAllTaskes():Observable<ApiResponse<ITodo[]>>{
    return this.http.get<ApiResponse<ITodo[]>>(`${environment.APIURL}/Task/Get`)
    }
  getByID(id:number):Observable<ApiResponse<ITodo>>{
   return this.http.get<ApiResponse<ITodo>>(`${environment.APIURL}/Task/GetByID?id=`+id)
  }
  addTask(td: ITodoPost){
    return this.http.post(`${environment.APIURL}/Task/POST`,td)
  }
  updateTask(td:ITodoUpdate){
    return this.http.put(`${environment.APIURL}/Task/PUT`,td)
  }
  deleteTask(id:number){
    return this.http.delete(`${environment.APIURL}/Task/Delete?id=`+id)
  }
}

