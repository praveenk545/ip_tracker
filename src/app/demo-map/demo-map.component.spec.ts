import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMapComponent } from './demo-map.component';

describe('DemoMapComponent', () => {
  let component: DemoMapComponent;
  let fixture: ComponentFixture<DemoMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoMapComponent]
    });
    fixture = TestBed.createComponent(DemoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
