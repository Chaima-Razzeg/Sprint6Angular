import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmetiquesComponent } from './cosmetiques.component';

describe('CosmetiquesComponent', () => {
  let component: CosmetiquesComponent;
  let fixture: ComponentFixture<CosmetiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmetiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmetiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
