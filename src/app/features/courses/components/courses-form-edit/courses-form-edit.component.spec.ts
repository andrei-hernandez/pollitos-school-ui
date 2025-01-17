import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesFormEditComponent } from './courses-form-edit.component';

describe('CoursesFormEditComponent', () => {
  let component: CoursesFormEditComponent;
  let fixture: ComponentFixture<CoursesFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesFormEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
