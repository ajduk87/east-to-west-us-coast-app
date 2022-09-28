import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Order, OrderItem } from '../menu.models';
import { MenuService } from '../menu.service';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  @Input() orderItems!: OrderItem[];
  @Input() total!: number;
  @Output() orderCancelled = new EventEmitter<void>();

  constructor(private menuService: MenuService, public dialog: MatDialog, private router: Router) { }

  createOrder() {
    const order: Order = { orderItems: this.orderItems, total: this.total, status:1 };
    this.menuService.createOrder(order).subscribe(order => {
      this.openPaymentDialog(order);
    })
  }

  openPaymentDialog(order: Order) {
    let dialogRef: MatDialogRef<PaymentComponent> =
      this.dialog.open(PaymentComponent, {
        data: order,
        hasBackdrop: true,
        disableClose: true
      });
    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        alert('thank you');
        this.router.navigate(['start']);
      }
    });
  }

  cancelOrder() {
    this.orderCancelled.emit();
  }
}
