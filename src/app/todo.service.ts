import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  startedEditing$ = new Subject<number>();
  toDoChange$ = new Subject<Todo[]>();

  private todoList: Todo[] = [ 
    new Todo('FirstTodo', '1992-10-03'), 
    new Todo('SecondTodo', '1992-07-03'),
  ];

  constructor() {}

  getTodos() {
    return this.todoList.slice();
  }

  updateTodoByIndex(i: number, todo: Todo) {
    this.todoList[i] = todo;
    this.toDoChange$.next(this.todoList.slice());
  }

  addTodo(todo: Todo) {
    this.todoList.push(todo);
    this.toDoChange$.next(this.todoList.slice());
  }

  deleteTodo(i: number) {
    this.todoList.splice(i, 1);
    this.toDoChange$.next(this.todoList.slice());
  }

  getTodoByIndex(index: number) {
    return this.todoList[index];
  }

  searchToDoByDate(value: string) {
     let filtered: Todo[] =  this.todoList.filter((todo) =>  todo.date.includes(value));
     this.toDoChange$.next(filtered);
  }

  searchByFilters(date: string , text: string) {
    let lowerCaseText = text.toLocaleLowerCase();

    if(date && text) {
      const filtered: Todo[] = this.todoList.filter((todo) => !!todo.date.includes(date) && todo.name.toLocaleLowerCase().includes(lowerCaseText));
      this.toDoChange$.next(filtered);
    }else if(date) {
      this.searchToDoByDate(date);
    }else if(text) {
      this.searchToDoByText(text);
    }else {
      this.toDoChange$.next(this.todoList);
    }  
  }

  searchToDoByText(value: string) {
    let lowerCase = value.toLocaleLowerCase();
    let filtered: Todo[] =  this.todoList.filter((todo) => todo.name.toLocaleLowerCase().includes(lowerCase));
    this.toDoChange$.next(filtered);
  }
}
