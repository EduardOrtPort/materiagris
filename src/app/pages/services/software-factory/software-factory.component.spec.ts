import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareFactoryComponent } from './software-factory.component';

describe('FeaturesComponent', () => {
  let component: SoftwareFactoryComponent;
  let fixture: ComponentFixture<SoftwareFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareFactoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
