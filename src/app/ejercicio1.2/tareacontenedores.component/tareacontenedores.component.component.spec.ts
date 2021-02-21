import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tareacontenedores.ComponentComponent } from './tareacontenedores.component.component';

describe('Tareacontenedores.ComponentComponent', () => {
  let component: Tareacontenedores.ComponentComponent;
  let fixture: ComponentFixture<Tareacontenedores.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tareacontenedores.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tareacontenedores.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
