import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesGridComponent } from './grades-grid.component';

describe('GradesGridComponent', () => {
  let component: GradesGridComponent;
  let fixture: ComponentFixture<GradesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradesGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
