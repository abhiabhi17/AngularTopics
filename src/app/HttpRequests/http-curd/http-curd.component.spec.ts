import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCurdComponent } from './http-curd.component';

describe('HttpCurdComponent', () => {
  let component: HttpCurdComponent;
  let fixture: ComponentFixture<HttpCurdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpCurdComponent]
    });
    fixture = TestBed.createComponent(HttpCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
