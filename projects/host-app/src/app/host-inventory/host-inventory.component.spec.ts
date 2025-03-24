import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostInventoryComponent } from './host-inventory.component';

describe('HostInventoryComponent', () => {
  let component: HostInventoryComponent;
  let fixture: ComponentFixture<HostInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostInventoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
