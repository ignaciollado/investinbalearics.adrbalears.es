import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsAndSubsidiesComponent } from './grants-and-subsidies.component';

describe('GrantsAndSubsidiesComponent', () => {
  let component: GrantsAndSubsidiesComponent;
  let fixture: ComponentFixture<GrantsAndSubsidiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrantsAndSubsidiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrantsAndSubsidiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
