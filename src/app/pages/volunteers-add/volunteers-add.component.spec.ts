import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersAddComponent } from './volunteers-add.component';

describe('VolunteersAddComponent', () => {
  let component: VolunteersAddComponent;
  let fixture: ComponentFixture<VolunteersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
