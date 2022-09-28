import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'start',
    loadChildren: () =>
      import('./start/start.module').then(
        (m) => m.StartModule
      ),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./menu/menu.module').then(
        (m) => m.MenuModule
      ),

  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/start'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/start'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
