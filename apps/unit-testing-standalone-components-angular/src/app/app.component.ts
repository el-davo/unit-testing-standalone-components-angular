import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  standalone: true,
  imports: [TodoListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  todos = [
    {
      id: 'todo-1',
      name: 'Todo 1',
    },
    {
      id: 'todo-2',
      name: 'Todo 2',
    }
  ]
}
