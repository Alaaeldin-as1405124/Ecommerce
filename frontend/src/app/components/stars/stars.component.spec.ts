import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsComponent } from './stars.component';

describe('StarsComponent', () => {
  let component: StarsComponent;
  let fixture: ComponentFixture<StarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should generate sequenced array ',()=>{
    expect(component.numSequence(5).length).toEqual(5)
  })
  it('should have stars equal to 0 by default',()=>{
    expect(component.stars).toEqual(0)
  })
});
