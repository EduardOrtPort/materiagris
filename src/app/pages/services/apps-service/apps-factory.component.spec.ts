import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsFactoryComponent } from './apps-factory.component';

describe('FeaturesComponent', () => {
  let component: AppsFactoryComponent;
  let fixture: ComponentFixture<AppsFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppsFactoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppsFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
