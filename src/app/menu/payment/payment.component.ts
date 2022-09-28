import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  paymentForm!: FormGroup
  constructor(public dialogRef: MatDialogRef<PaymentComponent>, private fb: FormBuilder) {
    this.buildForm();
  }

  confirm() {
    this.closeDialog(true);
  }

  public closeDialog(confirmed = false): void {
    this.dialogRef.close(confirmed);
  }

  buildForm() {
    this.paymentForm = this.fb.group({
      cardNumber: ['', Validators.required],
      cardHolder: ['', Validators.required],
      expiryDate: ['', Validators.required],
      ccv: ['', Validators.required]
    })
  }
}
