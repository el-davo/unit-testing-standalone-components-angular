import { CommonModule } from '@angular/common';
import { Component, computed, effect, input } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todos = input.required<Todo[]>();
  sortedTodos = computed(() =>
    this.todos()?.sort((a, b) => a.name.localeCompare(b.name))
  );

  constructor() {
    effect(() => {
      if (this.sortedTodos().length > 2) {
        this.doSomething();
      }
    });
  }

  doSomething() {
    console.log('Doing something awesome!');
  }
}
