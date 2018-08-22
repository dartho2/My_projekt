import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZajeciaYogaComponent } from './zajecia-yoga.component';

describe('ZajeciaYogaComponent', () => {
  let component: ZajeciaYogaComponent;
  let fixture: ComponentFixture<ZajeciaYogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZajeciaYogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZajeciaYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
