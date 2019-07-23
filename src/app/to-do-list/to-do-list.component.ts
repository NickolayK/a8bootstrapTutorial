import { Component, OnInit, OnDestroy } from '@angular/core';
import {Todo} from '../models/todo.model'
import { TodoService } from '../todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy{

  toDoList :Todo[] =  [];
  activeTodo : Todo;

  subscription: Subscription

  constructor( private todoService :TodoService) { }

  ngOnInit() {
    this.toDoList = this.todoService.getTodos();

    this.subscription =  this.todoService.toDoChange.subscribe( (todos:Todo[])=>{
      this.toDoList = todos;
    } )
  }

  onEditTodo(todo:Todo){
    this.activeTodo = todo;
    let index = this.todoService.getTodos().indexOf(todo);
    this.todoService.startedEditing.next(index);
  }
  onCancelEdit(){
    this.activeTodo = null;
  }

  sortByName() {
    this.toDoList.sort((a, b) => {
      if (a.name > b.name) {
        return -1
      } else if (a.name < b.name) {
        return 1;
      } else {
        return 0;
      }
    })
  }

  sortByDate() {
    this.toDoList.sort((a, b) => {
      if (a.date > b.date) {
        return 1
      } else if (a.date < b.date) {
        return -1;
      } else {
        return 0;
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
