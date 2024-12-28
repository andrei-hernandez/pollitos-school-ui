import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ZetcollegeComponent } from './zetcollege.component'

describe('ZetcollegeComponent', () => {
  let component: ZetcollegeComponent
  let fixture: ComponentFixture<ZetcollegeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetcollegeComponent]
    })
    .compileComponents()

    fixture = TestBed.createComponent(ZetcollegeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
