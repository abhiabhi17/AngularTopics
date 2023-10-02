import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BINDINGSComponent } from './bindings.component';

describe('BINDINGSComponent', () => {
  let component: BINDINGSComponent;
  let fixture: ComponentFixture<BINDINGSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BINDINGSComponent]
    });
    fixture = TestBed.createComponent(BINDINGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
