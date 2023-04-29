import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupOrDeliveryComponent } from './pickup-or-delivery.component';

describe('PickupOrDeliveryComponent', () => {
  let component: PickupOrDeliveryComponent;
  let fixture: ComponentFixture<PickupOrDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupOrDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupOrDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
