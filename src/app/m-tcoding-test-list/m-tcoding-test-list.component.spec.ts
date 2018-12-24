import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTCodingTestListComponent } from './m-tcoding-test-list.component';

describe('MTCodingTestListComponent', () => {
  let component: MTCodingTestListComponent;
  let fixture: ComponentFixture<MTCodingTestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTCodingTestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTCodingTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
