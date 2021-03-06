import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsAddComponent } from './contacts-add.component';

describe('ActionsAddComponent', () => {
  let component: ActionsAddComponent;
  let fixture: ComponentFixture<ActionsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
