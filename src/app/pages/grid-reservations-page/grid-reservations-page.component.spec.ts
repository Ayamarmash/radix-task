import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridReservationsPageComponent } from './grid-reservations-page.component';

describe('GridReservationsPageComponent', () => {
  let component: GridReservationsPageComponent;
  let fixture: ComponentFixture<GridReservationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridReservationsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridReservationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
