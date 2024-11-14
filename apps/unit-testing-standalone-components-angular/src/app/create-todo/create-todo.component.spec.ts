/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { CreateTodoComponent } from './create-todo.component';

describe('CreateTodoComponent', () => {
  let component: CreateTodoComponent;
  let fixture: ComponentFixture<CreateTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ CreateTodoComponent ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTodoComponent);
    component = fixture.componentInstance;

    jest.spyOn(component.newTodo, 'emit');

    fixture.detectChanges();
  });

  it('should create new todo', () => {
    component.form.controls.name.patchValue('test');

    fixture.debugElement.query(By.css('button')).nativeElement.click();

    expect(component.newTodo.emit).toHaveBeenCalledWith({id: 'abc123', name: 'test'});
  });
});
