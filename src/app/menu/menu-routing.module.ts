import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemsListComponent } from './menu-items-list/menu-items-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MenuItemsListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
