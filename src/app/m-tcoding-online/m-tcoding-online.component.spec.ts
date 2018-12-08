import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTCodingOnlineComponent } from './m-tcoding-online.component';

describe('MTCodingOnlineComponent', () => {
  let component: MTCodingOnlineComponent;
  let fixture: ComponentFixture<MTCodingOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTCodingOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTCodingOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
