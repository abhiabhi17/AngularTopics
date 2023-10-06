import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringIntegrationComponent } from './spring-integration.component';

describe('SpringIntegrationComponent', () => {
  let component: SpringIntegrationComponent;
  let fixture: ComponentFixture<SpringIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpringIntegrationComponent]
    });
    fixture = TestBed.createComponent(SpringIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
