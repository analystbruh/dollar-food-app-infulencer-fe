import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicGridComponent } from './pic-grid.component';

describe('PicGridComponent', () => {
  let component: PicGridComponent;
  let fixture: ComponentFixture<PicGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
