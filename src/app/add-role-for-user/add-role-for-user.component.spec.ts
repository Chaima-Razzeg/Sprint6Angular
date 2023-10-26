import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleForUserComponent } from './add-role-for-user.component';

describe('AddRoleForUserComponent', () => {
  let component: AddRoleForUserComponent;
  let fixture: ComponentFixture<AddRoleForUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRoleForUserComponent]
    });
    fixture = TestBed.createComponent(AddRoleForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
