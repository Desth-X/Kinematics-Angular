import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniformCircularMotionComponent } from './uniform-circular-motion.component';

describe('UniformCircularMotionComponent', () => {
  let component: UniformCircularMotionComponent;
  let fixture: ComponentFixture<UniformCircularMotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniformCircularMotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniformCircularMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
