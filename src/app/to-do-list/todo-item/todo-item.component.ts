import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() index: number;
  @Input() active: boolean;
  
  constructor(private todoService: TodoService) { }

  ngOnInit() {}

  onDelete() {
      this.todoService.deleteTodo(this.index);
  }

  onMark(event: MouseEvent) {
    event.stopPropagation();
    this.todo.done = !this.todo.done;
  }
}
