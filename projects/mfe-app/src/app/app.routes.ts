import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { InventoryComponent } from './inventory/inventory.component';

export const routes: Routes = [
  { 
    path: 'todolist', 
    component:TodoListComponent,
  },
  { 
    path: 'invetory', 
    component:InventoryComponent,
  },
// 
];
