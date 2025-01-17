import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormDeteleAllGradesComponent } from './student-form-detele-all-grades.component';

describe('StudentFormDeteleAllGradesComponent', () => {
  let component: StudentFormDeteleAllGradesComponent;
  let fixture: ComponentFixture<StudentFormDeteleAllGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFormDeteleAllGradesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormDeteleAllGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
