import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivComponent } from './reactiv.component';

describe('ReactivComponent', () => {
  let component: ReactivComponent;
  let fixture: ComponentFixture<ReactivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactivComponent]
    });
    fixture = TestBed.createComponent(ReactivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
