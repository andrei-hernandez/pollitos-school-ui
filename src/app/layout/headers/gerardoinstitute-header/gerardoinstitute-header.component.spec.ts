import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerardoinstituteHeaderComponent } from './gerardoinstitute-header.component';

describe('GerardoinstituteHeaderComponent', () => {
  let component: GerardoinstituteHeaderComponent;
  let fixture: ComponentFixture<GerardoinstituteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerardoinstituteHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerardoinstituteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
