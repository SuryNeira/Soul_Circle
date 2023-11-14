import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialesComponent } from './tutoriales.component';

describe('TutorialesComponent', () => {
  let component: TutorialesComponent;
  let fixture: ComponentFixture<TutorialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialesComponent]
    });
    fixture = TestBed.createComponent(TutorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
