import { Component, output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {

  newTodo = output<Todo>();

  form = new FormGroup({
    name: new FormControl<string>('')
  });

  submit() {
    this.newTodo.emit({id: 'abc123', name: this.form.controls.name.value ?? ''});
  }
}
