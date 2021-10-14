import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityStatsComponent } from './city-stats.component';

describe('CityStatsComponent', () => {
  let component: CityStatsComponent;
  let fixture: ComponentFixture<CityStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
