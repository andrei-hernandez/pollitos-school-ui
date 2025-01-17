import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesFormDeleteComponent } from './courses-form-delete.component';

describe('CoursesFormDeleteComponent', () => {
  let component: CoursesFormDeleteComponent;
  let fixture: ComponentFixture<CoursesFormDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesFormDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesFormDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
