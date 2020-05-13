import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NonLoginPage } from './non-login.page';

describe('NonLoginPage', () => {
  let component: NonLoginPage;
  let fixture: ComponentFixture<NonLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NonLoginPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NonLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
