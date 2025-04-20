import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcLogsComponent } from './qc-logs.component';

describe('QcLogsComponent', () => {
  let component: QcLogsComponent;
  let fixture: ComponentFixture<QcLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QcLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QcLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
