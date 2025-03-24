import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, importProvidersFrom, Type } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostInventoryComponent } from './host-inventory/host-inventory.component';

@Component({
  selector: 'app-root',
  
  imports: [
    RouterOutlet,
    CommonModule,
    HostInventoryComponent
    // importProvidersFrom(
    //   import('mfeApp/TodoListComponent').then(m => m.TodoListComponent)
    // )
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit  {
  title = 'host-app';

  HostTodoListComponent: Type<any> | null = null;


  async ngAfterViewInit() {
    try {
      const { TodoListComponent } = await import('mfeApp/TodoListComponent');
      this.HostTodoListComponent = TodoListComponent;
    } catch (error) {
      console.error('Error loading remote component:', error);
    }
  }

  
  // todoListComponent$: Promise<any>;

  // constructor() {
  //   this.todoListComponent$ = loadRemoteModule({
  //     remoteEntry: 'http://localhost:5300/remoteEntry.js',
  //     remoteName: 'mfeApp',
  //     exposedModule: './TodoListComponent',
  //   })
  //   .then(m => {
  //     console.log("Module Loaded:", m);
  //     return m.TodoListComponent;
  //   })
  //   .catch(err => console.error("Error loading remote module:", err));
  // }


}
