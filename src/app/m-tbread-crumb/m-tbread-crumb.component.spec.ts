import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTBreadCrumbComponent } from './m-tbread-crumb.component';

describe('MTBreadCrumbComponent', () => {
  let component: MTBreadCrumbComponent;
  let fixture: ComponentFixture<MTBreadCrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTBreadCrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTBreadCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
