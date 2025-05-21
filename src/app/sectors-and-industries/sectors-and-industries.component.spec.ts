import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsAndIndustriesComponent } from './sectors-and-industries.component';

describe('SectorsAndIndustriesComponent', () => {
  let component: SectorsAndIndustriesComponent;
  let fixture: ComponentFixture<SectorsAndIndustriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectorsAndIndustriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorsAndIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
