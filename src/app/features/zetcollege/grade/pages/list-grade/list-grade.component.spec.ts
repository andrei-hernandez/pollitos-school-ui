import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ListGradeComponent } from './list-grade.component'

describe('ListGradeComponent', () => {
  let component: ListGradeComponent
  let fixture: ComponentFixture<ListGradeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGradeComponent]
    })
    .compileComponents()

    fixture = TestBed.createComponent(ListGradeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
