import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTextViewerDetailHomeComponent } from './simple-text-viewer-detail-home.component';

describe('SimpleTextViewerDetailHomeComponent', () => {
  let component: SimpleTextViewerDetailHomeComponent;
  let fixture: ComponentFixture<SimpleTextViewerDetailHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleTextViewerDetailHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleTextViewerDetailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
