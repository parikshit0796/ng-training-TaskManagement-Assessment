import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormComponentComponent } from './task-form-component.component';

describe('TaskFormComponentComponent', () => {
  let component: TaskFormComponentComponent;
  let fixture: ComponentFixture<TaskFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFormComponentComponent]
    });
    fixture = TestBed.createComponent(TaskFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
