import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryWebComponent } from './dictionary-web.component';

describe('DictionaryWebComponent', () => {
  let component: DictionaryWebComponent;
  let fixture: ComponentFixture<DictionaryWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DictionaryWebComponent]
    });
    fixture = TestBed.createComponent(DictionaryWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
