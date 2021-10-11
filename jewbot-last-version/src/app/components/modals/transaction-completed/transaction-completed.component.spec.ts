import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCompletedComponent } from './transaction-completed.component';

describe('TransactionCompletedComponent', () => {
  let component: TransactionCompletedComponent;
  let fixture: ComponentFixture<TransactionCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
