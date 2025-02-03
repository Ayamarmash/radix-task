import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReservationsPageComponent } from './table-reservations-page.component';

describe('ListReservationsPageComponent', () => {
  let component: TableReservationsPageComponent;
  let fixture: ComponentFixture<TableReservationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableReservationsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableReservationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
