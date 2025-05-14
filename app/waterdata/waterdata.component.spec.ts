import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterdataComponent } from './waterdata.component';

describe('WaterdataComponent', () => {
  let component: WaterdataComponent;
  let fixture: ComponentFixture<WaterdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
