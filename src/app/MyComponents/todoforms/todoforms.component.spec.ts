import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoformsComponent } from './todoforms.component';

describe('TodoformsComponent', () => {
  let component: TodoformsComponent;
  let fixture: ComponentFixture<TodoformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
