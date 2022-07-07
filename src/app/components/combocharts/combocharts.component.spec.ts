import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombochartsComponent } from './combocharts.component';

describe('CombochartsComponent', () => {
  let component: CombochartsComponent;
  let fixture: ComponentFixture<CombochartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombochartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombochartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
