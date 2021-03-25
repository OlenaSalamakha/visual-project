import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: '/account',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    redirectTo: '/new-account',
    pathMatch: 'full'
  },
{
    path: 'account',
    loadChildren: () => import('./private/modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'new-account',
    loadChildren: () => import('./private/modules/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./private/modules/welcome-page/welcome-page.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./private/private.module').then(m => m.PrivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
