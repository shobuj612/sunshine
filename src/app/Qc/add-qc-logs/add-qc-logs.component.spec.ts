import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQcLogsComponent } from './add-qc-logs.component';

describe('AddQcLogsComponent', () => {
  let component: AddQcLogsComponent;
  let fixture: ComponentFixture<AddQcLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddQcLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQcLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
