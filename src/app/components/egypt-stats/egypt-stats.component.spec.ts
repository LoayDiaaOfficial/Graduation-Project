import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyptStatsComponent } from './egypt-stats.component';

describe('EgyptStatsComponent', () => {
  let component: EgyptStatsComponent;
  let fixture: ComponentFixture<EgyptStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgyptStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgyptStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
