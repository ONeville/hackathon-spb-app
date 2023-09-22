import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseManagementComponent } from './case-management.component';

describe('CaseManagementComponent', () => {
  let component: CaseManagementComponent;
  let fixture: ComponentFixture<CaseManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CaseManagementComponent]
    });
    fixture = TestBed.createComponent(CaseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
