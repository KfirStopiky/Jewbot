import { Component, OnInit } from '@angular/core';
import { SwapService } from 'src/app/shared/swap/swap.service';

@Component({
  selector: 'app-transaction-completed',
  templateUrl: './transaction-completed.component.html',
  styleUrls: ['./transaction-completed.component.css'],
})
export class TransactionCompletedComponent implements OnInit {
  constructor(public _SwapService: SwapService) {}

  ngOnInit(): void {}
}
