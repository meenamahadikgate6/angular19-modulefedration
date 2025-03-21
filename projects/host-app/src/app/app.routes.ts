// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

console.log('Routes are being initialized');

export const routes: Routes = [
  { 
    path: 'home', 
    component:HomeComponent,
  },
//   {
//     path: 'todolist',
//     loadComponent: async () =>
//         import("mfe-app/TodoListComponent").then((module_) => module_.TodoListModule),
//   },
{
    path: 'todolist',
    loadComponent: async () =>
      import("mfeApp/TodoListComponent").then(m => m.TodoListComponent),  
  },
  {
    path: 'invetory',
    loadComponent: async () =>
      import("mfeApp/InventoryComponent").then(m => m.InventoryComponent),  
  },

  
  
];

