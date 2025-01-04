import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeDashboardComponent } from './grade-dashboard.component';

describe('GradeDashboardComponent', () => {
  let component: GradeDashboardComponent;
  let fixture: ComponentFixture<GradeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
