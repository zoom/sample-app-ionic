import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: '../login/login.module#LoginModule'
          }
        ]
      },
      {
        path: 'non-login',
        children: [
          {
            path: '',
            loadChildren: '../non-login/non-login.module#NonLoginModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/non-login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/non-login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
