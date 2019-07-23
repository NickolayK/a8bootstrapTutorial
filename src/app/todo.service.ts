import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

 startedEditing = new Subject<number>();
 toDoChange = new Subject<Todo[]>();

  private todoList : Todo[] = [ 
    new Todo( 'FirstTodo ' , '1992-10-03' ) , 
    new Todo( 'SecondTodo ' , '1992-07-03' )
  ];

  constructor() { }

  getTodos(){
    return this.todoList.slice();
  }

  updateTodoByIndex( i :number , todo:Todo){
    this.todoList[i] = todo;
    this.toDoChange.next(this.todoList.slice());
}

  addTodo(todo:Todo){
    this.todoList.push(todo);
    this.toDoChange.next(this.todoList.slice());
  }

  deleteTodo(i : number){
    this.todoList.splice( i , 1);
    this.toDoChange.next(this.todoList.slice());
  }

  getTodoByIndex( index : number){
    return this.todoList[index];
  }

  searchToDo(value:string){
    let lowerCase = value.toLocaleLowerCase();
     let filtered:Todo[] =  this.todoList.filter( (todo)=>  todo.date.toLocaleLowerCase().includes(lowerCase) || todo.name.toLocaleLowerCase().includes(lowerCase) );

     this.toDoChange.next(filtered);
  }
}
