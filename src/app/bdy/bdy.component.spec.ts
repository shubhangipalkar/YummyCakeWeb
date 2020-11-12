import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdyComponent } from './bdy.component';

describe('BdyComponent', () => {
  let component: BdyComponent;
  let fixture: ComponentFixture<BdyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
