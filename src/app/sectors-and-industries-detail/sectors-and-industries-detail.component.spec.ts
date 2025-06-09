import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsAndIndustriesDetailComponent } from './sectors-and-industries-detail.component';

describe('SectorsAndIndustriesDetailComponent', () => {
  let component: SectorsAndIndustriesDetailComponent;
  let fixture: ComponentFixture<SectorsAndIndustriesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectorsAndIndustriesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorsAndIndustriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
