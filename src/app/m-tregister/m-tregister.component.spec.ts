import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTRegisterComponent } from './m-tregister.component';

describe('MTRegisterComponent', () => {
  let component: MTRegisterComponent;
  let fixture: ComponentFixture<MTRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
