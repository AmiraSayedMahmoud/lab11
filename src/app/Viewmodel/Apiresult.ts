
import { ITodo } from "../Model/itodo";

export class ApiResponse<T>{
    Data:ITodo[]=[];
    Message="";
    Success="";
    IsAuthorized=true;
}