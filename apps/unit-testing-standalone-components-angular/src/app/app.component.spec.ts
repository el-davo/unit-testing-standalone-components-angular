import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
    }).overrideComponent(AppComponent, {
      remove: {
        imports: [TodoListComponent]
      }
    }).overrideComponent(AppComponent, {
      set: {
        schemas: [NO_ERRORS_SCHEMA]
      }
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
  })

  it('should have a list of todos', () => {
    expect(fixture.debugElement.query(By.css('app-todo-list'))).not.toBeNull();
  });
});
