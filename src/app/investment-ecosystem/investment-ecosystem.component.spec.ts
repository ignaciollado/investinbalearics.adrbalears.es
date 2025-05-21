import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentEcosystemComponent } from './investment-ecosystem.component';

describe('InvestmentEcosystemComponent', () => {
  let component: InvestmentEcosystemComponent;
  let fixture: ComponentFixture<InvestmentEcosystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestmentEcosystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentEcosystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
