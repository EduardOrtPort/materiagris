import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TISupportComponent } from './ti-support.component';

describe('FeaturesComponent', () => {
  let component: TISupportComponent;
  let fixture: ComponentFixture<TISupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TISupportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TISupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
