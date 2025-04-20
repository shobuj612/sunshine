import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaSettingComponent } from './criteria-setting.component';

describe('CriteriaSettingComponent', () => {
  let component: CriteriaSettingComponent;
  let fixture: ComponentFixture<CriteriaSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriteriaSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriteriaSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
