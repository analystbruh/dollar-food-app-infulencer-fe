import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidGridComponent } from './vid-grid.component';

describe('VidGridComponent', () => {
  let component: VidGridComponent;
  let fixture: ComponentFixture<VidGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
