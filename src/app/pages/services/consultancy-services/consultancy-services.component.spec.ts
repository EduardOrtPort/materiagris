import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyandServiceComponent } from './consultancy-services.component';

describe('FeaturesComponent', () => {
  let component: ConsultancyandServiceComponent;
  let fixture: ComponentFixture<ConsultancyandServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultancyandServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultancyandServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
