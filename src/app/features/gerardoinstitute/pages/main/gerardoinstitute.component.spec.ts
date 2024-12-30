import { ComponentFixture, TestBed } from '@angular/core/testing'
import { GerardoinstituteComponent } from './gerardoinstitute.component'

describe('GerardoinstituteComponent', () => {
  let component: GerardoinstituteComponent
  let fixture: ComponentFixture<GerardoinstituteComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerardoinstituteComponent]
    })
    .compileComponents()

    fixture = TestBed.createComponent(GerardoinstituteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
