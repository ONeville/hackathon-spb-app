import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelessUserComponent } from './homeless-user.component';

describe('HomelessUserComponent', () => {
  let component: HomelessUserComponent;
  let fixture: ComponentFixture<HomelessUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomelessUserComponent]
    });
    fixture = TestBed.createComponent(HomelessUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
