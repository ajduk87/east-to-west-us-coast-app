import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from '../menu.models';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() item!: MenuItem;
  @Output() itemAdded = new EventEmitter<MenuItem>();
  @Output() itemRemoved = new EventEmitter<MenuItem>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: MenuItem) {
    this.itemAdded.emit(item);
  }

  removeItem(item: MenuItem) {
    this.itemRemoved.emit(item);
  }

}
