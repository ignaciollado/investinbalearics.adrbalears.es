import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyInvestComponent } from './why-invest.component';

describe('WhyInvestComponent', () => {
  let component: WhyInvestComponent;
  let fixture: ComponentFixture<WhyInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyInvestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
