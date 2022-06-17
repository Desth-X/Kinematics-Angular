import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniformLinearMotionComponent } from './uniform-linear-motion.component';

describe('UniformLinearMotionComponent', () => {
  let component: UniformLinearMotionComponent;
  let fixture: ComponentFixture<UniformLinearMotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniformLinearMotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniformLinearMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
