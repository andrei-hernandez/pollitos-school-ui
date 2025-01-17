import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesFormDeleteComponent } from './grades-form-delete.component';

describe('GradesFormDeleteComponent', () => {
  let component: GradesFormDeleteComponent;
  let fixture: ComponentFixture<GradesFormDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradesFormDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesFormDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
