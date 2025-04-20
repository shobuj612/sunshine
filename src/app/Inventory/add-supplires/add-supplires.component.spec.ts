import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuppliresComponent } from './add-supplires.component';

describe('AddSuppliresComponent', () => {
  let component: AddSuppliresComponent;
  let fixture: ComponentFixture<AddSuppliresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSuppliresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSuppliresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
