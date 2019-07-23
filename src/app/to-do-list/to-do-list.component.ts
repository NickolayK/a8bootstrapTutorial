import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo.model'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  toDoList :Todo[] =  [ new Todo( 'FirstTodo ' , '1992-20-03' ) ,  new Todo( 'SecondTodo ' , '1992-20-03' )]
  constructor() { }

  ngOnInit() {
  }

}
