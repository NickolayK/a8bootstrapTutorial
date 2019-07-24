import { 
  Component, 
  OnInit,
  OnDestroy,
  Output,
  EventEmitter 
} from '@angular/core';
import { 
  FormGroup,
  FormControl,
  Validators 
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/todo.service';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit , OnDestroy {

  @Output() cancelEdit = new EventEmitter();
  subscription: Subscription;
  editedTodoIndex: number;
  editMode = false;
  editedTodo: Todo;
  reactiveForm: FormGroup;

  constructor (private todoService: TodoService) {}

  ngOnInit() {
    this.initForm();
    this.subscription = this.todoService.startedEditing$.subscribe( (i: number)=>{

      this.editedTodoIndex = i;
      this.editMode = true;
      this.editedTodo = this.todoService.getTodoByIndex(i);
      this.initForm();
    })
  }

  initForm() {
    let name = '';
    let date = '';

    if (this.editMode){
       name = this.editedTodo.name;
       date = this.editedTodo.date;
    }

    this.reactiveForm = new FormGroup({
      'name': new FormControl(name , Validators.required),
      'date': new FormControl(date , Validators.required),
    });
  }

  onAddTodo() {
    const todo = new Todo(this.reactiveForm.value.name, this.reactiveForm.value.date);

    if (this.editMode) {
      this.todoService.updateTodoByIndex(this.editedTodoIndex, todo);
    } else {
      this.todoService.addTodo(todo);
    }

    this.reactiveForm.reset();
    this.editMode = false;
    this.cancelEdit.emit();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onReset() {
    this.editMode = false;
    this.cancelEdit.emit();
  }
}
