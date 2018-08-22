import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderYogaComponent } from './header-yoga.component';

describe('HeaderYogaComponent', () => {
  let component: HeaderYogaComponent;
  let fixture: ComponentFixture<HeaderYogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderYogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
