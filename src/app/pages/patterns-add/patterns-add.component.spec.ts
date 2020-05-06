import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternsAddComponent } from './patterns-add.component';

describe('PatternsAddComponent', () => {
  let component: PatternsAddComponent;
  let fixture: ComponentFixture<PatternsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
