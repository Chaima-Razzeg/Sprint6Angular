import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOfusersComponent } from './liste-ofusers.component';

describe('ListeOfusersComponent', () => {
  let component: ListeOfusersComponent;
  let fixture: ComponentFixture<ListeOfusersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeOfusersComponent]
    });
    fixture = TestBed.createComponent(ListeOfusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
