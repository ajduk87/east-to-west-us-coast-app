import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuItemsListComponent } from './menu-items-list/menu-items-list.component';
import { SharedModule } from '../shared/shared.module';
import { OrderFormComponent } from './order-form/order-form.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    MenuItemsListComponent,
    OrderFormComponent,
    MenuItemComponent,
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
