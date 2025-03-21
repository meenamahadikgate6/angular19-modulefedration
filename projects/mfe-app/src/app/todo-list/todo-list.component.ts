import { Component } from '@angular/core';
import { InventoryComponent } from '../inventory/inventory.component';

@Component({
  selector: 'app-todo-list',
  imports: [InventoryComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

}
