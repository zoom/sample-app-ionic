import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonLoginPage } from './non-login.page';

describe('NonLoginPage', () => {
  let component: NonLoginPage;
  let fixture: ComponentFixture<NonLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NonLoginPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
