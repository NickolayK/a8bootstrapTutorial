import { Component, OnInit, ViewChild, OnDestroy, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/todo.service';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit , OnDestroy {

  subscription : Subscription;
  editedTodoIndex : number;
  editMode = false;
  editedTodo : Todo;

  @ViewChild('myForm' , {static : false}) myForm :NgForm ;
  @Output() cancelEdit = new EventEmitter();

  constructor( private todoService : TodoService) { }

  ngOnInit() {
    this.subscription = this.todoService.startedEditing.subscribe( (i : number)=>{

      this.editedTodoIndex = i;
      this.editMode = true;
      this.editedTodo = this.todoService.getTodoByIndex(i);

      this.myForm.setValue({
        'name': this.editedTodo.name,
        'date': this.editedTodo.date
      });
    })
  }

  onAddTodo(form:NgForm){
    let todo = new Todo(
      form.value.name,
      form.value.date
    )

    if (this.editMode) {
      this.todoService.updateTodoByIndex(this.editedTodoIndex, todo);
      
    } else {
      this.todoService.addTodo(todo);
      
    }
    this.myForm.reset();
    this.editMode = false;
    this.cancelEdit.emit();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onReset(){
    this.editMode = false;
    this.myForm.reset();
    this.cancelEdit.emit();
  }

}
