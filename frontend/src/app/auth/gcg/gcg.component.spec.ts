import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GCGComponent } from './gcg.component';

describe('GCGComponent', () => {
  let component: GCGComponent;
  let fixture: ComponentFixture<GCGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GCGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GCGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
