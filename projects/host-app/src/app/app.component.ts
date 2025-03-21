import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  
  imports: [
    RouterOutlet,
    CommonModule,
    // importProvidersFrom(
    //   import('mfeApp/TodoListComponent').then(m => m.TodoListComponent)
    // )
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'host-app';
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
