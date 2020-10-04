import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quote.TsComponent } from './quote.ts.component';

describe('Quote.TsComponent', () => {
  let component: Quote.TsComponent;
  let fixture: ComponentFixture<Quote.TsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quote.TsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quote.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
