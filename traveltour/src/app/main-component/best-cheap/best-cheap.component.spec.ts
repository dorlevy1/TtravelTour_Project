import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCheapComponent } from './best-cheap.component';

describe('BestCheapComponent', () => {
  let component: BestCheapComponent;
  let fixture: ComponentFixture<BestCheapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestCheapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestCheapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
