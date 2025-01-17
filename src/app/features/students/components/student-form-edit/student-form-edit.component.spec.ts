import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormEditComponent } from './student-form-edit.component';

describe('StudentFormEditComponent', () => {
  let component: StudentFormEditComponent;
  let fixture: ComponentFixture<StudentFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFormEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
