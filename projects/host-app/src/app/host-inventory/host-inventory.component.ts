import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import("mfeApp/TodoListComponent").then(m => m.TodoListComponent);


@Component({
  selector: 'app-host-inventory',  
  standalone: true,
  template: `<ng-container #placeholder></ng-container>`,
})
export class HostInventoryComponent {
  @ViewChild('placeholder', { read: ViewContainerRef }) vcRef!: ViewContainerRef;

  async ngAfterViewInit() {
    const { TodoListComponent } = await import('mfeApp/TodoListComponent');
    this.vcRef.createComponent(TodoListComponent);
  }
}
