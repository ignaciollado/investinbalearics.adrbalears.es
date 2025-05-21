import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTalentComponent } from './the-talent.component';

describe('TheTalentComponent', () => {
  let component: TheTalentComponent;
  let fixture: ComponentFixture<TheTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TheTalentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
