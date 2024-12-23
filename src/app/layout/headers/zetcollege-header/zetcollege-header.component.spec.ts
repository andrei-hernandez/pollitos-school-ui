import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZetcollegeHeaderComponent } from './zetcollege-header.component';

describe('ZetcollegeHeaderComponent', () => {
  let component: ZetcollegeHeaderComponent;
  let fixture: ComponentFixture<ZetcollegeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetcollegeHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZetcollegeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
