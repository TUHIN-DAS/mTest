import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTLoginComponent } from './m-tlogin.component';

describe('MTLoginComponent', () => {
  let component: MTLoginComponent;
  let fixture: ComponentFixture<MTLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
