import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwaterComponent } from './addwater.component';

describe('AddwaterComponent', () => {
  let component: AddwaterComponent;
  let fixture: ComponentFixture<AddwaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddwaterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddwaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
