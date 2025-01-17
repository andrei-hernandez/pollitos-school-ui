import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormAddComponent } from './student-form-add.component';

describe('StudentFormAddComponent', () => {
  let component: StudentFormAddComponent;
  let fixture: ComponentFixture<StudentFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFormAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
