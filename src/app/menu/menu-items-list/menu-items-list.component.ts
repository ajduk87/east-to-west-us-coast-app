import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { MenuItem, OrderItem } from '../menu.models';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-items-list',
  templateUrl: './menu-items-list.component.html',
  styleUrls: ['./menu-items-list.component.scss']
})
export class MenuItemsListComponent implements OnInit {
  menuItems$: Observable<MenuItem[]> = this.menuService.getMenuItems();
  isLoading$ = this.loaderService.isLoading$;
  order: OrderItem[] = [];
  total = 0;

  constructor(private menuService: MenuService, private loaderService: LoaderService,private router: Router) { }

  ngOnInit(): void {
    this.loaderService.isLoading$.next(true);
  }

  addToOrder(item: MenuItem): void {
    const selectedOrderItem = this.order.find(orderItem => orderItem.menuitemId === item.id);
    if (selectedOrderItem) {
      selectedOrderItem.amount += 1;
    } else {
      this.order.push({
        menuitemId: item.id,
        name: item.name,
        amount: 1,
        value: item.price,
        orderid: 0
      })
    }
    this.calculateTotal();
  }

  removeFromOrder(item: MenuItem): void {
    const selectedOrderItem = this.order.find(orderItem => orderItem.menuitemId === item.id);
    if (selectedOrderItem && selectedOrderItem.amount > 1) {
      selectedOrderItem.amount -= 1;
    } else if (selectedOrderItem && selectedOrderItem.amount <= 1) {
      this.order.splice(this.order.indexOf(selectedOrderItem), 1);
    }

    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    this.order.forEach(item => {
      this.total += item.value * item.amount;
    });
    this.total = Math.round(this.total * 100) / 100
  }

  cancelOrder() {
    this.order = [];
    this.router.navigate(['start']);
  }
}
