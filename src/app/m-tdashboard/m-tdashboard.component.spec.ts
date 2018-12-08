import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTDashboardComponent } from './m-tdashboard.component';

describe('MTDashboardComponent', () => {
  let component: MTDashboardComponent;
  let fixture: ComponentFixture<MTDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
