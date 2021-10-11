import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsActiveComponent } from './transactions-active.component';

describe('TransactionsActiveComponent', () => {
  let component: TransactionsActiveComponent;
  let fixture: ComponentFixture<TransactionsActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
