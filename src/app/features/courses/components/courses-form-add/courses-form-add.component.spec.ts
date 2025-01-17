import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesFormAddComponent } from './courses-form-add.component';

describe('CoursesFormAddComponent', () => {
  let component: CoursesFormAddComponent;
  let fixture: ComponentFixture<CoursesFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesFormAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
