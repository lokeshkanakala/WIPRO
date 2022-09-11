import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UitoolsComponent } from './uitools.component';

describe('UitoolsComponent', () => {
  let component: UitoolsComponent;
  let fixture: ComponentFixture<UitoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UitoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UitoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
