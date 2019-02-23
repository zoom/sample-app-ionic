import { Component } from '@angular/core';

import { LoginUserPage } from '../login/login';
import { NonLoginUserPage } from '../non-login/nonlogin';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NonLoginUserPage;
  tab2Root = LoginUserPage;

  constructor() {

  }
}
