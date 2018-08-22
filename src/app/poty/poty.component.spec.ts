import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotyComponent } from './poty.component';

describe('PotyComponent', () => {
  let component: PotyComponent;
  let fixture: ComponentFixture<PotyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
