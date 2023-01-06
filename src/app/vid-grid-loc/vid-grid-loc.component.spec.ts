import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidGridLocComponent } from './vid-grid-loc.component';

describe('VidGridLocComponent', () => {
  let component: VidGridLocComponent;
  let fixture: ComponentFixture<VidGridLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidGridLocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidGridLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
