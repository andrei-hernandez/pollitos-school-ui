import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesFormAddComponent } from './grades-form-add.component';

describe('GradesFormAddComponent', () => {
  let component: GradesFormAddComponent;
  let fixture: ComponentFixture<GradesFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradesFormAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
