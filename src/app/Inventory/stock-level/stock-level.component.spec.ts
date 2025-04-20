import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLevelComponent } from './stock-level.component';

describe('StockLevelComponent', () => {
  let component: StockLevelComponent;
  let fixture: ComponentFixture<StockLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockLevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
