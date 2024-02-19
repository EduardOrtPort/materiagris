import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopeComponent } from './develope.component';

describe('FeaturesComponent', () => {
  let component: DevelopeComponent;
  let fixture: ComponentFixture<DevelopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
