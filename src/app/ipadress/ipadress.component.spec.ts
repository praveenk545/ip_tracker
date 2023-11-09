import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPadressComponent } from './ipadress.component';

describe('IPadressComponent', () => {
  let component: IPadressComponent;
  let fixture: ComponentFixture<IPadressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IPadressComponent]
    });
    fixture = TestBed.createComponent(IPadressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
