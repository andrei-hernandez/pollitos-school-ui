import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesFormEditComponent } from './grades-form-edit.component';

describe('GradesFormEditComponent', () => {
  let component: GradesFormEditComponent;
  let fixture: ComponentFixture<GradesFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradesFormEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
