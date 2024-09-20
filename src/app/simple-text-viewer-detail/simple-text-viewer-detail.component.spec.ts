import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTextViewerDetailComponent } from './simple-text-viewer-detail.component';

describe('SimpleTextViewerDetailComponent', () => {
  let component: SimpleTextViewerDetailComponent;
  let fixture: ComponentFixture<SimpleTextViewerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleTextViewerDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleTextViewerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
