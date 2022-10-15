export interface ITodo {
    ID:number;
    Title:string;
    IsDone:boolean;
    CreatedDate:string;
}
export interface ITodoPost {
    Title:string;
}
export interface ITodoUpdate{
    Title:string;
    ID:number;
    IsDone:boolean;
}