import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTNotificationsComponent } from './m-tnotifications.component';

describe('MTNotificationsComponent', () => {
  let component: MTNotificationsComponent;
  let fixture: ComponentFixture<MTNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
