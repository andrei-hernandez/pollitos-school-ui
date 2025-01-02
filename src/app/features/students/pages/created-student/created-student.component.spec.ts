import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedStudentComponent } from './created-student.component';

describe('CreatedStudentComponent', () => {
  let component: CreatedStudentComponent;
  let fixture: ComponentFixture<CreatedStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
