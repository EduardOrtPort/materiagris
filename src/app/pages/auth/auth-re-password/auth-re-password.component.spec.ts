import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRePasswordComponent } from './auth-re-password.component';

describe('AuthRePasswordComponent', () => {
  let component: AuthRePasswordComponent;
  let fixture: ComponentFixture<AuthRePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthRePasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthRePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
