import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CteatTodoComponent } from './cteat-todo.component';

describe('CteatTodoComponent', () => {
  let component: CteatTodoComponent;
  let fixture: ComponentFixture<CteatTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CteatTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CteatTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
