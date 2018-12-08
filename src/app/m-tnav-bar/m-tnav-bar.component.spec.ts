import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTNavBarComponent } from './m-tnav-bar.component';

describe('MTNavBarComponent', () => {
  let component: MTNavBarComponent;
  let fixture: ComponentFixture<MTNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
