import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareQualityComponent } from './software-quality.component';

describe('FeaturesComponent', () => {
  let component: SoftwareQualityComponent;
  let fixture: ComponentFixture<SoftwareQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareQualityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
