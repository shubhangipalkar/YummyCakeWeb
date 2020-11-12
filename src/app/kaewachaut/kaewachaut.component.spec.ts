import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaewachautComponent } from './kaewachaut.component';

describe('KaewachautComponent', () => {
  let component: KaewachautComponent;
  let fixture: ComponentFixture<KaewachautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaewachautComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaewachautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
