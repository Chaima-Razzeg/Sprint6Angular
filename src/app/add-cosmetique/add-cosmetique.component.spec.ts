import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCosmetiqueComponent } from './add-cosmetique.component';

describe('AddCosmetiqueComponent', () => {
  let component: AddCosmetiqueComponent;
  let fixture: ComponentFixture<AddCosmetiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCosmetiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCosmetiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
