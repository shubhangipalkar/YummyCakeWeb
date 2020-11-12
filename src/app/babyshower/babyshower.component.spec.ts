import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyshowerComponent } from './babyshower.component';

describe('BabyshowerComponent', () => {
  let component: BabyshowerComponent;
  let fixture: ComponentFixture<BabyshowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyshowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyshowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
