import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtodosComponent } from './showtodos.component';

describe('ShowtodosComponent', () => {
  let component: ShowtodosComponent;
  let fixture: ComponentFixture<ShowtodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowtodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowtodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
