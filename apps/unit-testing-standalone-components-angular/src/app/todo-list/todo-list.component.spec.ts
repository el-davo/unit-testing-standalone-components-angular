import { model, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { Todo } from '../todo.interface';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent],
    }).overrideComponent(AppComponent, {
      remove: {
        imports: []
      }
    }).overrideComponent(AppComponent, {
      set: {
        schemas: [NO_ERRORS_SCHEMA]
      }
    })

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    TestBed.runInInjectionContext(() => {
      component.todos = model([
        {id: 'abc1', name: 'Todo 1'},
        {id: 'abc2', name: 'Todo 2'},
        {id: 'abc3', name: 'Todo 3'}
      ] as Todo[] | undefined
      );
    });

    fixture.detectChanges();
  });

  it('should have a list of todos', () => {
    expect(element.querySelectorAll('.todo').length).toBe(3);
    expect(fixture.debugElement.query(By.css('.no-todos'))).toBeNull();
  });

  it('should show a message if no todos are available', () => {
    (component.todos as any).set([]);

    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.todo')).length).toBe(0);
    expect(fixture.debugElement.query(By.css('.no-todos'))).not.toBeNull();
  });
});
